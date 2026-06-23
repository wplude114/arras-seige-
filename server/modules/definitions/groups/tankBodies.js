const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Body
Class.tankBody = {
    PARENT: "genericEntity",
    UPGRADE_LABEL: "Body",
    INDEPENDENT: true,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "motor",
    COLOR: "mirror",
    
    SHAPE: [[-1.7,-1],[0,-1.3],[1.7,-1],[1.7,1],[0,1.3],[-1.7,1]],
    CONTROLLERS: ["turretWithMotion", "scaleWithMaster"],
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
            POSITION: {LENGTH: 7,WIDTH: 10,ASPECT: 1, X: 13,Y: 0,ANGLE: 180,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.1, range: 0.05, damage: 0, recoil: 1.5, shudder: 4}]),
                TYPE: "bullet",
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
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.05, range: 0.1, damage: 0.375, recoil: 1.4, shudder: 7}]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        },
    ],
}

Class.Base = { PARENT: "genericTank", UPGRADE_LABEL: "Body", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "tankBody" }] }
    Class.Booster = { PARENT: "genericTank", UPGRADE_LABEL: "Booster Body", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "boosterBody" }] }
    Class.Thruster = { PARENT: "genericTank", UPGRADE_LABEL: "Thruster Body", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "thrusterBody" }] }

Class.Base.UPGRADES_TIER_2 = ["Booster"]
    Class.Booster.UPGRADES_TIER_3 = ["Thruster"]
