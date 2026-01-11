const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Basic & starting upgrades
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Tank",
    UPGRADE_TOOLTIP: "The basic tank.",
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

Class.guard = {
    PARENT: "genericTank",
    LABEL: "Guard",
    UPGRADE_TOOLTIP: "Shoot in 2 angles!",
    DANGER: 5,
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
            POSITION: {LENGTH: 12,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 180,DELAY: 0.5},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
    ]
}
Class.trapLayer = {
    PARENT: "genericTank",
    LABEL: "Trap Layer",
    UPGRADE_TOOLTIP: "Shoot high-damage traps!",
    DANGER: 5,
    GUNS: [
        {
            POSITION: {LENGTH: 20,WIDTH: 9,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
        {
            POSITION: {LENGTH: 20,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                //COLOR: -1, // maybe for t3?
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
                SHOOT_SETTINGS: combineStats([g.basic, {Size: 0.75}]),
                TYPE: "trap",
            }
        },
        {
            POSITION: {LENGTH: 11,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
    ]
}

// t3 -- trap path
Class.trapomatic = {
    PARENT: "genericTank",
    LABEL: "Trap-o-matic",
    UPGRADE_TOOLTIP: "Shoot upgraded, beefy traps!",
    DANGER: 6,
    GUNS: [
        {
            POSITION: {LENGTH: 20,WIDTH: 9,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
        {
            POSITION: {LENGTH: 20,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                COLOR: -1,
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
                SHOOT_SETTINGS: combineStats([g.basic, {Size: 0.75}]),
                TYPE: "trap",
            }
        },
        {
            POSITION: {LENGTH: 11,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
    ]
}

// Upgrade Paths
Class.basic.UPGRADES_TIER_1 = ['trapLayer', 'guard']

// Trap path
Class.trapLayer.UPGRADES_TIER_2 = ['trapomatic']



















