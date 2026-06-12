const { combineStats, makeAuto, weaponArray, makeTurret } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');

Class.protoD = {
    PARENT: "genericTank",
    LABEL: "Proto-Dread",
    SIZE: 24,
    SHAPE: 6,
    COLOR: 17,
    FACING_TYPE: ['spin', {speed: 0.02}],
    BODY: {HEALTH: 50, DAMAGE: 3, FOV: 1.1},
};

Class.protoDread = {
    PARENT: "protoD",
    LABEL: "Dianought",
	VALUE: 63319,
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
            POSITION: [4, 8, 0, 0, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [4, 8, 0, 180, 360, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [4, 8, 0, 60, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [4, 8, 0, 120, 360, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [4, 8, 0, -60, 360, 1],
            TYPE: "autoTankGun",
        }, {
            POSITION: [4, 8, 0, -120, 360, 1],
            TYPE: "autoTankGun",
        },
    ],
};

Class.protoDread.UPGRADES_TIER_1 = ["protoJuggernaut", "protoInvader","protoMechanic"]
