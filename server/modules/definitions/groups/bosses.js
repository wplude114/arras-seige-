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
