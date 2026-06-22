const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Basic & starting upgrades
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Base",
    DANGER: 0,
    GUNS: [
        {
            POSITION: {LENGTH: 11,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
    ]
}

// Base upgrades [TIER 1]
Class.barrel = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
    GUNS: [
       {
            POSITION: {LENGTH: 17,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
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

Class.mount = {
    PARENT: "genericTank",
    LABEL: "Mount",
    TURRETS: [
        ...Class.genericTank.TURRETS,
        {
            POSITION: [7, 10, 0, 0, 190, 0],
            TYPE: ["genericEntity", {
                INDEPENDENT: true
            }]
        }
    ]
}

// Basic upgrades [TIER 2]
Class.tri = {
    PARENT: "genericTank",
    LABEL: "Tri",
    DANGER: 5,
    FACING_TYPE: ["spin", { speed: 0.05, independent: true }],
    GUNS: [
       {
            POSITION: {LENGTH: 17,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
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

        
       {
            POSITION: {LENGTH: 17,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 120,DELAY: 0.33},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 14,Y: 0,ANGLE: 120,DELAY: 0.33},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 120,DELAY: 0.33},
        },

        
       {
            POSITION: {LENGTH: 17,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: -120,DELAY: 0.66},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 14,Y: 0,ANGLE: -120,DELAY: 0.66},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: -120,DELAY: 0.66},
        },
    ]
}

// Mount upgrades [TIER 2]

Class.flailR = {
    PARENT: "genericFlail",
    LABEL: "Flail",
    TURRETS: [
        ...Class.genericTank.TURRETS,
        {
            POSITION: [6, 10, 0, 0, 0, 0],
            TYPE: ["flailBolt2", {
                INDEPENDENT: true
            }]
        }
    ]
}

Class.basic.UPGRADES_TIER_1 = ["barrel", "mount"]
    Class.barrel.UPGRADES_TIER_2 = ["tri"]
    Class.mount.UPGRADES_TIER_2 = ["flailR"]
