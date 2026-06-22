const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Basic & starting upgrades
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Base",
    DANGER: 1,
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

Class.smasher = {
    PARENT: "genericSmasher",
    LABEL: "Smasher",
    DANGER: 4,
}

// Basic upgrades [TIER 2]
Class.tri = {
    PARENT: "genericTank",
    LABEL: "Tri",
    DANGER: 5,
    HAS_NO_RECOIL: true,
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

// Smasher upgrades [TIER 3]
Class.newSentry = {
    PARENT: "genericSmasher",
    LABEL: "Sentry",
    DANGER: 5,
    TURRETS: [
        ...Class.genericSmasher.TURRETS,
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]
        }
    ]
}

// Mount upgrades [TIER 2]

Class.bar = {
    PARENT: "genericTank",
    LABEL: "Bar",
    HAS_NO_RECOIL: true,
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

// Tier 3 stuff

Class.triBar = {
    PARENT: "genericTank",
    LABEL: "Tri-Bar",
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
Class.basic.UPGRADES_TIER_1 = ["barrel", "mount"]
    Class.basic.UPGRADES_TIER_2 = ["smasher"]

    Class.barrel.UPGRADES_TIER_2 = ["tri"]
    Class.mount.UPGRADES_TIER_2 = ["bar", "flailR"]
    Class.smasher.UPGRADES_TIER_3 = ["newSentry"]

        Class.bar.UPGRADES_TIER_3 = ["triBar"]
        Class.tri.UPGRADES_TIER_3 = ["triBar"]
