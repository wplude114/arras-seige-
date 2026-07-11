const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Basic & starting upgrades
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    UPGRADE_TOOLTIP: "Basicly a basic!",
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

// Base upgrades [TIER 1]
Class.mount = {
    PARENT: "genericTank",
    LABEL: "Mount",
    UPGRADE_TOOLTIP: "Placeholder",
    DANGER: 4,
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

Class.castle = {
    PARENT: "genericTank",
    LABEL: "Castle",
    UPGRADE_TOOLTIP: "HOW DID YOU FIND ME",
    DANGER: 1,
    SHAPE: 3,
    HAS_NO_RECOIL: true,
    FACING_TYPE: ["spin", { speed: 0.05, independent: true }],
}

// Basic upgrades [TIER 2]
Class.machineGun = {
    PARENT: "genericTank",
    LABEL: "Machine Gun",
    UPGRADE_TOOLTIP: "As if normal shooting speed wasnt enough..",
    DANGER: 5,
    GUNS: [
       {
            POSITION: {LENGTH: 17,WIDTH: 7,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 6,WIDTH: 9,ASPECT: 1.5, X: 14,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 9,ASPECT: 1.3, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
    ]
}

Class.tri = {
    PARENT: "genericTank",
    LABEL: "Tri",
    UPGRADE_TOOLTIP: "Can't aim, can kill!",
    DANGER: 5,
    FACING_TYPE: ["spin", { speed: 0.05, independent: true }],
    GUNS: [
       {
            POSITION: {LENGTH: 17,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 14,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true
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
                HAS_NO_RECOIL: true
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 14,Y: 0,ANGLE: 120,DELAY: 0.33},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true
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
                HAS_NO_RECOIL: true
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 14,Y: 0,ANGLE: -120,DELAY: 0.66},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                HAS_NO_RECOIL: true
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: -120,DELAY: 0.66},
        },
    ]
}

Class.lobber = {
    PARENT: "genericTank",
    LABEL: "Lobber",
    UPGRADE_TOOLTIP: "Lobber.",
    DANGER: 4,
    GUNS: [
       {
            POSITION: {LENGTH: 17,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 10,ASPECT: 1.1, X: 14,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 10,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
    ]
}

// Mount upgrades [TIER 2]
Class.bar = {
    PARENT: "genericTank",
    LABEL: "Bar",
    UPGRADE_TOOLTIP: "Placeholder",
    GUNS: [
        {
            POSITION: {LENGTH: 17,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },],
    TURRETS: [
        ...Class.genericTank.TURRETS,
        {
            POSITION: [8, 17, 0, 0, 200, 1],
            TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]
        }
    ]
}

Class.flailR = {
    PARENT: "genericTank",
    LABEL: "Flail",
    UPGRADE_TOOLTIP: "Placeholder",
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

// Tier 3 stuff

Class.triBar = {
    PARENT: "genericTank",
    LABEL: "Tri-Bar",
    UPGRADE_TOOLTIP: "Please don't get mechanism with this.",
    FACING_TYPE: ["spin", { speed: 0.05, independent: true }],
    GUNS: [
        {
            POSITION: {LENGTH: 17,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
        {
            POSITION: {LENGTH: 17,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 120,DELAY: 0},
        },
        {
            POSITION: {LENGTH: 17,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: -120,DELAY: 0},
        },],
    TURRETS: [
        ...Class.genericTank.TURRETS,
        {
            POSITION: [8, 17, 0, 0, 200, 1],
            TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]
        },
        {
            POSITION: [8, 17, 0, 120, 200, 1],
            TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]
        },
        {
            POSITION: [8, 17, 0, -120, 200, 1],
            TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]
        },]
}

// Upgrade tree
Class.basic.UPGRADES_TIER_1 = ["machineGun", "tri", "lobber"]
        Class.tri.UPGRADES_TIER_2 = ["triBar"]
