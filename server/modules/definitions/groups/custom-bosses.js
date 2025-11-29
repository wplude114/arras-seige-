const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');
require('./bosses.js');

// Terrestrials
let rokna = new LayeredBoss(null, "Rokna", "terrestrial", 7, "aqua", "terrestrialTrapTurret", 7, 5.5);
rokna.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
rokna.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["pentashotTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);

// Eternal
let menace = new LayeredBoss(null, "Menace", "eternal", 13, "grey", "terrestrialTrapTurret", 13, 5.5);
menace.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
menace.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["bigauto4gun", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
menace.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["machineTripleTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
menace.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["boomerTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);

