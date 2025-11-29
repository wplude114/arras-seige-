const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');
require('./bosses.js');

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
let rokna = new LayeredBoss(null, "Rokna", "terrestrial", 8, "aqua", "terrestrialTrapTurret", 8, 5.5);
rokna.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
rokna.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["boomerTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);

let tyr = new LayeredBoss(null, "Tyr", "celestial", 9, "mustard", "terrestrialTrapTurret", 9, 5.5);
tyr.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.5} }],
}}, true, 6.5);
tyr.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["crasherSpawner", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.5} }],
}}, true, 6.5);

// Eternal
let menace = new LayeredBoss(null, "Menace", "eternal", 13, "grey", "terrestrialTrapTurret", 13, 5.5);
menace.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
menace.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["pentashotTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
menace.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["machineTripleTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
menace.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["boomerTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);

let zeus = new LayeredBoss(null, "Zeus", "eternal", 15, "mustard", "terrestrialTrapTurret", 15, 5.5);
zeus.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["hyperTwisterTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 2.8, damage: 3.3} }],
}}, true, 6.5);
zeus.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["nailgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 2.8, damage: 3.3} }],
}}, true, 6.5);
zeus.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["carrierTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 2.8, damage: 3.3} }],
}}, true, 6.5);
zeus.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 2.8, damage: 3.3} }],
}}, true, 6.5);
