const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');
require('./bosses.js');

// bases
Class.entrestrial = {
    PARENT: "miniboss",
    LABEL: "Entrestrial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 350000,
    SHAPE: 5,
    SIZE: 23,
    CONTROLLERS: [["minion", {orbit: 125}]],
    BODY: {
        FOV: 1.1,
        HEALTH: 350,
        SHIELD: 50,
        REGEN: base.REGEN * 10,
        SPEED: base.SPEED * 2,
        DAMAGE: 4,
    },
};

// Nesters
Class.nestWatcher = {
    PARENT: "miniboss",
    LABEL: "Nest Watcher",
    COLOR: "purple",
    UPGRADE_COLOR: "purple",
    SHAPE: 5,
    SIZE: 50,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.45,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    VALUE: 3e5,
    GUNS: weaponArray([
        {
            POSITION: [10.7, 5, 1, 0, 0, 36, 0],
        }, {
            POSITION: [1.5, 5, 0.7, 10.7, 0, 36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, { speed: 1.5 }, g.setTrap, g.constructor]),
                TYPE: "flare",
                STAT_CALCULATOR: "block"
            },
        }
    ], 5),
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [ "shotgunTurret", { INDEPENDENT: true, COLOR: -1 } ],
        },
        ...weaponArray({
            POSITION: [8, 9, 0, 0, 120, 0],
            TYPE: [ "minigunNesterTurret", { INDEPENDENT: true, COLOR: -1 } ],
        }, 5)
    ],
}

// Entrestirals
let thor = new LayeredBoss("th", "Thor", "entrestrial", 7, "purple", "terrestrialTrapTurret", 4, 5);
thor.addLayer({turret: {
    POSITION: [9, 8, 0, null, 120, 0],
    TYPE: ["boomerTurret", { INDEPENDENT: true, COLOR: -1 } ],
}}, true, 10, 10);

let zeus = new LayeredBoss("ze", "Zeus", "entrestrial", 5, "gold", "terrestrialTrapTurret", 4, 5);
zeus.addLayer({turret: {
    POSITION: [9, 8, 0, null, 120, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, COLOR: -1 } ],
}}, true, 10, 10);

let gaia = new LayeredBoss("ga", "Gaia", "entrestrial", 5, "lightGreen", "terrestrialTrapTurret", 4, 5);
gaia.addLayer({gun: {
    POSITION: [2, 7, -1.6, 8.85, 0, null, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.pounder, g.destroyer, {speed: 6.25, maxSpeed: 8}]),
        TYPE: ["realchip", {INDEPENDENT: true, DRAW_HEALTH: true, COLOR: 'lightGreen', SHAPE: 5}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
    },
}}, true, 10, 10);

let hades = new LayeredBoss("ha", "Hades", "entrestrial", 5, "orange", "terrestrialTrapTurret", 4, 5);
hades.addLayer({turret: {
    POSITION: [9, 8, 0, null, 120, 0],
    TYPE: ["launcherTurret", { INDEPENDENT: true, COLOR: -1 } ],
}}, true, 10, 10);

let demeter = new LayeredBoss("de", "Demeter", "entrestrial", 5, "pink", "terrestrialTrapTurret", 4, 5);
demeter.addLayer({turret: {
    POSITION: [9, 8, 0, null, 120, 0],
    TYPE: ["tripletTurret", { INDEPENDENT: true, COLOR: -1 } ],
}}, true, 10, 10);

let themis = new LayeredBoss("the", "Themis", "entrestrial", 7, "aqua", "terrestrialTrapTurret", 4, 5);
themis.addLayer({turret: {
    POSITION: [9, 8, 0, null, 120, 0],
    TYPE: ["rocketeerTurret", { INDEPENDENT: true, COLOR: -1 } ],
}}, true, 10, 10);

let testent = new LayeredBoss("testent", "Test Entrestrial", "entrestrial", 5, 3, "terrestrialTrapTurret", 4, 5);
testent.addLayer({turret: {
    POSITION: [9, 8, 0, null, 120, 0],
    TYPE: ["crowbarTurret", { INDEPENDENT: true, COLOR: -1 } ],
}}, true, 10, 10);

let finalent = new LayeredBoss("finalent", "The Menace", "entrestrial", 7, 17, "terrestrialTrapTurret", 4, 5);
finalent.addLayer({turret: {
    POSITION: [9, 8, 0, null, 120, 0],
    TYPE: ["pentashotTurret", { INDEPENDENT: true, COLOR: -1 } ],
}}, true, 10, 10);

// Terrestrials
let rokna = new LayeredBoss("rokna", "Hestia", "terrestrial", 7, "aqua", "terrestrialTrapTurret", 6.5, 5.5);
rokna.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["shotgunTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
rokna.addLayer({turret: {
    POSITION: [9.5, 7.5, 0, null, 160, 0],
    TYPE: ["boomerTurret", { INDEPENDENT: true, GUN_STAT_SCALE: {health: 1.8, damage: 1.3} }],
}}, true, 6.5);
