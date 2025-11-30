const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');
require('./bosses.js');

// bases
Class.entrestrial = {
    // Proto-Terrestrial: A weak 2-layer miniboss.
    PARENT: "miniboss",
    LABEL: "Unknown Entrestrial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 3500000,
    SHAPE: 5,
    SIZE: 25,
    CONTROLLERS: [["minion", {orbit: 75}]],
    BODY: {
        FOV: 1.1,
        HEALTH: 450,
        SHIELD: 30,
        REGEN: base.REGEN * 0.05,
        SPEED: base.SPEED * 10,
        DAMAGE: 7,
    },
};

//shiny mysticals
Class.shinysorcerer = {
    PARENT: "miniboss",
    LABEL: "Sorcerer",
    DANGER: 8,
    SHAPE: 0,
    COLOR: "lightGreen",
    UPGRADE_COLOR: "lightGreen",
    SIZE: 28,
    MAX_CHILDREN: 75,
    VALUE: 5e5,
    BODY: {
        FOV: 0.7,
        SPEED: 0.22 * base.SPEED,
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
    GUNS: weaponArray({
        POSITION: [3.5, 8.65, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.machineGun, g.machineGunner, { damage: 1.8, size: 0.5, spray: 150, speed: 2, shudder: 1.75, color: "lightGreen" }]),
            TYPE: "minichip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true,
        },
    }, 2)
};
Class.shinysummoner = {
    PARENT: "miniboss",
    LABEL: "Summoner",
    DANGER: 8,
    SHAPE: 4,
    COLOR: "lightGreen",
    UPGRADE_COLOR: "lightGreen",
    SIZE: 28,
    MAX_CHILDREN: 35,
    VALUE: 7e5,
    BODY: {
        FOV: 0.7,
        SPEED: 0.2 * base.SPEED,
        HEALTH: 12 * base.HEALTH,
        DAMAGE: 4 * base.DAMAGE,
    },
    GUNS: weaponArray({
        POSITION: [3.5, 8.65, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.8, color: "lightGreen" }]),
            TYPE: "summonerDrone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true,
        },
    }, 4)
};
Class.shinyenchantress = {
    PARENT: "miniboss",
    LABEL: "Enchantress",
    DANGER: 8,
    SHAPE: 3.5,
    COLOR: "lightGreen",
    UPGRADE_COLOR: "lightGreen",
    SIZE: 26,
    MAX_CHILDREN: 28,
    VALUE: 1e6,
    BODY: {
        FOV: 0.7,
        SPEED: 0.15 * base.SPEED,
        HEALTH: 17 * base.HEALTH,
        DAMAGE: 7 * base.DAMAGE,
    },
    GUNS: weaponArray({
        POSITION: [3.5, 8.65, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 1, damage: 1.1, color: "lightGreen" }]),
            TYPE: "dorito",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true,
        },
    }, 3)
};

// Terrestrials
let rokna = new LayeredBoss(null, "Rokna", "terrestrial", 7, "aqua", "terrestrialTrapTurret", 6.5, 5.5);
rokna.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
rokna.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["boomerTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);

let thor = new LayeredBoss("th", "Thor", "entrestrial", 5, "purple", "terrestrialTrapTurret", 3, 5);
thor.addLayer({turret: {
    POSITION: [9, 8, 0, null, 160, 0],
    TYPE: ["boomerTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.7, damage: 1.2} }],
}}, true, 10, 10);

