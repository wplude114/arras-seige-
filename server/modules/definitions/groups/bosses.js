const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');
require('./dev.js');

Class.miniboss = {
    PARENT: "genericBoss",
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    AI: { NO_LEAD: true },
}
Class.ramMiniboss = {
    PARENT: "genericBoss",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal"],
}
Class.triangleRamDeco = makeDeco(3, 17);

Class.boss_1 = {
    PARENT: "miniboss",
    LABEL: "test boss 01",
    VALUE: 30,
    SHAPE: 3,
    SIZE: 27,
    COLOR: 5,
    PROPS: [{
        POSITION: [24],
        TYPE: makeDeco(0, 17)
    },{
        POSITION: [24],
        TYPE: "triangleRamDeco"
    },{
        POSITION: [10,0,0,0,1],
        TYPE: "triangleRamDeco"
    },{
        POSITION: [10,0,0,0,1],
        TYPE: makeDeco(0, 5)
    }],
};

if (!Class.bosses) Class.bosses = {}; if (!Array.isArray(Class.bosses.UPGRADES_TIER_0)) Class.bosses.UPGRADES_TIER_0 = []; Class.bosses.UPGRADES_TIER_0.push("boss_1");
