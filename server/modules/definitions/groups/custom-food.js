const { combineStats, makeAuto, weaponArray, makeTurret } = require('../facilitators.js');
const { makeRelic, , makeCrasher, makeLaby, weaponArray } = require('../facilitators.js');

Class.protoD = {
    PARENT: "genericTank",
    LABEL: "Proto-Dread",
    SIZE: 24,
    SHAPE: 6,
    COLOR: 17,
    FACING_TYPE: ['spin', {speed: 0.02}],
    BODY: {DAMAGE: 3, FOV: 1.1},
};

Class.protoDread = {
    PARENT: "protoD",
    LABEL: "Proto-Dread",
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
    LABEL: "Proto-Juggernaut",
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
    LABEL: "Proto-Invader",
    GUNS: weaponArray({
		POSITION: [5.5, 7.5, 1.3, 7.5, 0, 0, 0],
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
			TYPE: "drone",
			AUTOFIRE: true,
			SYNCS_SKILLS: true,
			STAT_CALCULATOR: "drone",
			WAIT_TO_CYCLE: true,
			MAX_CHILDREN: 10,
		}
	}, 2)
};

Class.protoDread.UPGRADES_TIER_1 = ["protoJuggernaut", "protoInvader"]
