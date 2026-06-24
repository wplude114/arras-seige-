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

Class.trainBody = {
    PARENT: "tankBody",
    INDEPENDENT: true,
}
Class.trainBolt = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [50, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [40, 50, 0, 0, 360, 1],
        TYPE: "trainBody"
    }],
}
Class.trainBody = {
    PARENT: "tankBody",
    TURRETS: [
        { POSITION: [10, 15, 0, 180, 180, -10], TYPE: "trainBolt" }
    ]
}

// aura stuff goes here

Class.Base = { PARENT: "genericTank", UPGRADE_LABEL: "", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "tankBody" }] }
Class.BaseD = { PARENT: "Base" }
    Class.Booster = { PARENT: "genericTank", UPGRADE_LABEL: "Booster Body", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "boosterBody" }] }
    Class.Thruster = { PARENT: "genericTank", UPGRADE_LABEL: "Thruster Body", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "thrusterBody" }] }
    Class.Resurfacer = { PARENT: "genericTank", UPGRADE_LABEL: "Resurfacer Body", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "resurfacerBody" }] }

    Class.Train = { PARENT: "genericTank", UPGRADE_LABEL: "Body", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "trainBody" }] }

Class.Base.UPGRADES_TIER_2 = ["Booster",["BaseD","Train"]]
Class.BaseD.UPGRADES_TIER_2 = ["Booster"]
    Class.Booster.UPGRADES_TIER_3 = ["Thruster", "Resurfacer"]
