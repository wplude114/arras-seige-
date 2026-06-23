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
    CONTROLLERS: ["turretWithMotion", "scaleWithMaster"],
    GUNS: [
      {
            POSITION: {LENGTH: 8,WIDTH: 16,ASPECT: 1, X: 14,Y: 0,ANGLE: 90,DELAY: 0},
            PROPERTIES: {
              COLOR: 17
            }
        },
    ],
}

Class.Base = { PARENT: "genericEntity", TURRETS: [{ POSITION: [17, 0, 0, 0, 360, -10], TYPE: "tankBody" }] }
