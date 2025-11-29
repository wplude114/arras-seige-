const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');
require('./bosses.js');

// bosstypes
Class.Pterrestrial = {
    // Proto-Terrestrial: A weak 2-layer miniboss.
    PARENT: "miniboss",
    LABEL: "Proto-Terrestrial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 3500000,
    SHAPE: 5,
    SIZE: 25,
    CONTROLLERS: [["minion", {orbit: 75}]],
    BODY: {
        FOV: 0.9,
        HEALTH: 650,
        SHIELD: 30,
        REGEN: base.REGEN * 0.05,
        SPEED: base.SPEED * 0.7,
        DAMAGE: 7,
    },
};

// Proto-Terrestrials
// --- Gersemi
let Pgersemi = new LayeredBoss(null, "Proto-Gersemi", "Pterrestrial", 5, "lightGreen", "terrestrialTrapTurret", 5, 5.5);
Pgersemi.addLayer({turret: {
    POSITION: [9, 8, 0, null, 160, 0],
    TYPE: ["swarmTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.7, damage: 1.2} }],
}});
// --- Ares
let Pares = new LayeredBoss(null, "Proto-Ares", "Pterrestrial", 5, "purple", "terrestrialTrapTurret", 5, 5.5);
Pares.addLayer({gun: {
    POSITION: [3.75, 7, 1.2, 8, 0, null, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroyer, {health: 1.2, damage: 1.1, resist: 1.1, density: 1.5, maxSpeed: 1.25}]),
        TYPE: ["demonchip", { INDEPENDENT: true }],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: "drone",
        WAIT_TO_CYCLE: true,
    },
}}, false, null, 18);
// --- Rokna
let Prokna = new LayeredBoss(null, "Proto-Rokna", "Pterrestrial", 5, "aqua", "terrestrialTrapTurret", 5, 5.5);
Prokna.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);

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
