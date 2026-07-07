const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');

Class.miniboss = {
    PARENT: "genericBoss",
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    AI: { NO_LEAD: true },
}
Class.ramMiniboss = {
    PARENT: "genericBoss",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal"],
}

Class.boss_1 = {
    PARENT: "miniboss",
    VALUE: 30,
    SHAPE: 3,
    SIZE: 27,
    COLOR: 5,
};

if (!Class.developer) Class.developer = {};
if (!Class.developer.UPGRADES_TIER_0) Class.developer.UPGRADES_TIER_0 = [];
Class.developer.UPGRADES_TIER_0.push("boss_1");
