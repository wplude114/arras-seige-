const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Basic & starting upgrades
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {LENGTH: 20,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 14,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
    ]
}
Class.doublet = {
    PARENT: "genericTank",
    LABEL: "Doublet",
    DANGER: 5,
    GUNS: [
        {
            POSITION: {LENGTH: 20,WIDTH: 6,ASPECT: 1, X: 0,Y: 6,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 14,Y: 6,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 8,ASPECT: 1, X: 0,Y: 6,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
            }
        },
        
        {
            POSITION: {LENGTH: 20,WIDTH: 6,ASPECT: 1, X: 0,Y: -6,ANGLE: 0,DELAY: 0.5},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 14,Y: -6,ANGLE: 0,DELAY: 0.5},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 8,ASPECT: 1, X: 0,Y: -6,ANGLE: 0,DELAY: 0.5},
        },
    ]
}
Class.trapLayer = {
    PARENT: "genericTank",
    LABEL: "Trappette",
    DANGER: 5,
    GUNS: [
        {
            POSITION: {LENGTH: 12.5,WIDTH: 10,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
        {
            POSITION: {LENGTH: 20,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 15,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 3,WIDTH: 8,ASPECT: 1.6, X: 18,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "trap",
            }
        },
        {
            POSITION: {LENGTH: 11,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
    ]
}

// Upgrade Paths
Class.basic.UPGRADES_TIER_1 = ['trapLayer', 'doublet']










