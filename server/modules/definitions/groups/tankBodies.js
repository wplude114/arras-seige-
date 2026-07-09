const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Body
Class.tankBody = {
    PARENT: "genericEntity",
    LABEL: "Body",
    INDEPENDENT: true,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "motor",
    COLOR: "mirror",
    
    SHAPE: [[-1.7,-1],[0,-1.3],[1.7,-1],[1.7,1],[0,1.3],[-1.7,1]],
    CONTROLLERS: ["turretWithMotion"],
    GUNS: [
      {
            POSITION: {LENGTH: 15,WIDTH: 31,ASPECT: 1, X: 0,Y: 0,ANGLE: 90,DELAY: 0},
            PROPERTIES: {
              COLOR: 17
            }
        },
      {
            POSITION: {LENGTH: 15,WIDTH: 31,ASPECT: 1, X: 0,Y: 0,ANGLE: -90,DELAY: 0},
            PROPERTIES: {
              COLOR: 17
            }
        },
    ],
}

Class.smasherBody = {
    PARENT: "genericEntity",
    LABEL: "Body",
    INDEPENDENT: true,
    FACING_TYPE: ['spin', {speed: -0.06}],
    MOTION_TYPE: "motor",
    COLOR: "mirror",
    
    SHAPE: 5,
    GUNS: [
      {
            POSITION: {LENGTH: 15,WIDTH: 20,ASPECT: 0.0001, X: 0,Y: 0,ANGLE: 180,DELAY: 0},
            PROPERTIES: {
              COLOR: 17,
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
                TYPE: ["bullet", { ALPHA: 0 }],
                AUTOFIRE: true
            }
        },
      {
            POSITION: {LENGTH: 15,WIDTH: 20,ASPECT: 0.0001, X: 0,Y: 0,ANGLE: 180-(72),DELAY: 0},
            PROPERTIES: {
              COLOR: 17,
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
                TYPE: ["bullet", { ALPHA: 0 }],
                AUTOFIRE: true
            }
        },
      {
            POSITION: {LENGTH: 15,WIDTH: 20,ASPECT: 0.0001, X: 0,Y: 0,ANGLE: 180-(72*2),DELAY: 0},
            PROPERTIES: {
              COLOR: 17,
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
                TYPE: ["bullet", { ALPHA: 0 }],
                AUTOFIRE: true
            }
        },
      {
            POSITION: {LENGTH: 15,WIDTH: 20,ASPECT: 0.0001, X: 0,Y: 0,ANGLE: 180-(72*3),DELAY: 0},
            PROPERTIES: {
              COLOR: 17,
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
                TYPE: ["bullet", { ALPHA: 0 }],
                AUTOFIRE: true
            }
        },
      {
            POSITION: {LENGTH: 15,WIDTH: 20,ASPECT: 0.0001, X: 0,Y: 0,ANGLE: 180-(72*4),DELAY: 0},
            PROPERTIES: {
              COLOR: 17,
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
                TYPE: ["bullet", { ALPHA: 0 }],
                AUTOFIRE: true
            }
        },
    ],
}

// booster
Class.boosterBody = {
    PARENT: "tankBody",
    INDEPENDENT: false,
    GUNS: [
        ...Class.tankBody.GUNS,
        {
            POSITION: {LENGTH: 7,WIDTH: 10,ASPECT: 1.4, X: 13,Y: 0,ANGLE: 180,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.1, range: 0.05, damage: 0, recoil: 1.5, shudder: 10}]),
                TYPE: "growBullet",
                ALT_FIRE: true
            }
        },
    ],
}
// booster upgrades
Class.resurfacerBody = {
    PARENT: "tankBody",
    INDEPENDENT: false,
    GUNS: [
        ...Class.tankBody.GUNS,
        {
            POSITION: {LENGTH: 7,WIDTH: 10,ASPECT: 1, X: 13,Y: 0,ANGLE: 180,DELAY: 0},
        },
        {
            POSITION: {LENGTH: 4,WIDTH: 10,ASPECT: 1.4, X: 20,Y: 0,ANGLE: 180,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.3, range: 0.3, damage: 0.5, recoil: 3, shudder: 10, speed: 0.5}]),
                TYPE: "trap",
                ALT_FIRE: true
            }
        },
    ],
}
Class.thrusterBody = {
    PARENT: "tankBody",
    INDEPENDENT: false,
    GUNS: [
        ...Class.tankBody.GUNS,
        {
            POSITION: {LENGTH: 7,WIDTH: 12,ASPECT: 1.4, X: 13,Y: 0,ANGLE: 180,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.05, range: 0.1, damage: 0.25, recoil: 1.4, shudder: 15}]),
                TYPE: "growBullet",
                ALT_FIRE: true
            }
        },
    ],
}

Class.genericBase = { PARENT: "genericTank", LABEL: null,  }
Class.Base = { PARENT: "genericBase", UPGRADE_LABEL: "Base", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "tankBody" }] }

    Class.Automation = { PARENT: "genericBase", LABEL: "Automation", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "tankBody" }, {POSITION: [8,0,0,180,360,15], TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]}] }
        Class.Mechanism = {
            PARENT: "genericBase",
            LABEL: "Mechanism",
            TURRETS: [
                { POSITION: [17, 0, 0, 0, 360, -10], TYPE: "tankBody" },
                {POSITION: [6,5,0,60,360,15], TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]},
                {POSITION: [6,5,0,120+60,360,15], TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]},
                {POSITION: [6,5,0,-120+60,360,15], TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]},
            ]
        }
        Class.Tracker = { PARENT: "genericBase", LABEL: "Tracker", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "tankBody" }, {POSITION: [7,0,0,180,360,15], TYPE: ["autoTankTracker", {INDEPENDENT: true}]}] }

    Class.Smasher = { PARENT: "genericBase", LABEL: "Smasher", TURRETS: [{ POSITION: [22, 0, 0, 0, 360, -10], TYPE: "smasherBody" }] }

    Class.Booster = { PARENT: "genericBase", LABEL: "Booster", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "boosterBody" }] }
        Class.Thruster = { PARENT: "genericBase", LABEL: "Thruster", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "thrusterBody" }] }
        Class.Resurfacer = { PARENT: "genericBase", LABEL: "Resurfacer", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "resurfacerBody" }] }

Class.Base.UPGRADES_TIER_2 = ["Booster", "Smasher"]
Class.Base.UPGRADES_TIER_3 = ["Automation"]

    Class.Booster.UPGRADES_TIER_3 = ["Thruster", "Resurfacer"]
    Class.Automation.UPGRADES_TIER_3 = ["Mechanism", "Tracker"]
