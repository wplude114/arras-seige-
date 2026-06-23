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

Class.boosterBody = {
    PARENT: "tankBody",
    INDEPENDENT: false,
    GUNS: [
        ...Class.tankBody.GUNS,
        {
            POSITION: {LENGTH: 4,WIDTH: 8,ASPECT: 1, X: 13,Y: 0,ANGLE: 180,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        },
    ],
}

Class.Base = { PARENT: "genericTank", UPGRADE_LABEL: "Booster Body", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "tankBody" }] }
    Class.Booster = { PARENT: "genericTank", UPGRADE_LABEL: "Booster Body", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "boosterBody" }] }

Class.Base.UPGRADES_TIER_2 = ["Booster"]
