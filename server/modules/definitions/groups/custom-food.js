const { combineStats, makeAuto, weaponArray, makeTurret } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');

// turrets
Class.mechanism = {
    PARENT: "genericTankNoBody",
    COLOR: -1,
    FACING_TYPE: ["spin", { speed: -0.02, independent: true }],
	GUNS:[
	 {
            POSITION: [20, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
				AUTOFIRE: true
            },
        }, {
            POSITION: [20, 10, 1, 0, 0, 120, 0.33],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
				AUTOFIRE: true
            },
        }, {
            POSITION: [20, 10, 1, 0, 0, -120, 0.66],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
				AUTOFIRE: true
            },
        },
	]
}

// dreads
Class.protoD = {
    PARENT: "genericTankNoBody",
    LABEL: "Proto-Dread",
    SIZE: 28,
    SHAPE: 6,
    COLOR: 17,
    FACING_TYPE: ['spin', {speed: 0.02}],
    BODY: {HEALTH: 50, DAMAGE: 3, FOV: 1.1},
};

Class.protoDread = {
    PARENT: "protoD",
    LABEL: "Dianought",
	VALUE: 63319,
	REROOT_UPGRADE_TREE: "protoDread",
    TURRETS: [
        {
            POSITION: [7, 10, 0, 0, 160, 0],
            TYPE: "autoTankGun",
        }, {
            POSITION: [7, 10, 0, 180, 160, 0],
            TYPE: "autoTankGun",
        },
    ],
};

Class.protoJuggernaut = {
    PARENT: "protoD",
    LABEL: "Juggernaut",
    TURRETS: [
        {
            POSITION: [7, 10, 0, 0, 160, 0],
            TYPE: "autoTankGun",
        }, {
            POSITION: [7, 10, 0, 180, 160, 0],
            TYPE: "autoTankGun",
        },
        
        {
            POSITION: [7, 10, 0, 60, 160, 0],
            TYPE: "autoTankGun",
        }, {
            POSITION: [7, 10, 0, -120, 160, 0],
            TYPE: "autoTankGun",
        },
    ],
};
Class.protoInvader = {
    PARENT: "protoD",
    LABEL: "Necromantic",
    GUNS: weaponArray({
		POSITION: [4.5, 7, 0.7, 7.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.overseer, {reload: 0.3, size: 0.5}]),
			TYPE: "drone",
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: "drone",
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 5,
		}
	}, 2)
};
Class.protoMechanic = {
    PARENT: "protoD",
    LABEL: "Mechanic",
	BODY: {DAMAGE: 1.6},
	SHAPE: 6.5,
    TURRETS: [
        {
            POSITION: [4, 9, 0, 0, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [4, 9, 0, 180, 360, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [4, 9, 0, 60, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [4, 9, 0, 120, 360, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [4, 9, 0, -60, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [4, 9, 0, -120, 360, 1],
            TYPE: "autoTankGun",
        },
    ],
};


Class.protoMechanic_Myriad = {
    PARENT: "protoD",
    LABEL: "Mechanic-Myriad",
	BODY: {DAMAGE: 2},
	SHAPE: 6.5,
    TURRETS: [
        {
            POSITION: [4, 9, 0, 0, 360, 1],
            TYPE: "auto4gun",
        }, {
            POSITION: [4, 9, 0, 180, 360, 1],
            TYPE: "auto4gun",
        },
        {
            POSITION: [4, 9, 0, 60, 360, 1],
            TYPE: "auto4gun",
        }, {
            POSITION: [4, 9, 0, 120, 360, 1],
            TYPE: "auto4gun",
        },
        {
            POSITION: [4, 9, 0, -60, 360, 1],
            TYPE: "auto4gun",
        }, {
            POSITION: [4, 9, 0, -120, 360, 1],
            TYPE: "auto4gun",
        },
    ],
};
Class.protoMechanic_Mechanisim = {
    PARENT: "protoD",
    LABEL: "Mechanic-Mechanisim",
	BODY: {DAMAGE: 2},
	SHAPE: 6.5,
    TURRETS: [
        {
            POSITION: [4, 9, 0, 0, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [4, 9, 0, 180, 360, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [4, 9, 0, 60, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [4, 9, 0, 120, 360, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [4, 9, 0, -60, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [4, 9, 0, -120, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [7, 0, 0, -120, 360, 1],
            TYPE: "mechanism",
        },
    ],
};

Class.protoDread.UPGRADES_TIER_1 = ["protoJuggernaut", "protoInvader","protoMechanic"]
	Class.protoMechanic.UPGRADES_TIER_2 = ["protoMechanic_Mechanisim", "protoMechanic_Myriad"]
