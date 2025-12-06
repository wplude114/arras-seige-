const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');
require('./bosses.js');

// def
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

Class.eggdeco = makeDeco(0);
Class.squaredeco = makeDeco(4.5);
Class.squaredeco2 = makeDeco(4);
Class.trideco = makeDeco(3.5);
Class.trideco2 = makeDeco(3);
Class.pentdeco = makeDeco(5.5);
Class.pentdeco2 = makeDeco(5);

// Mysticals
Class.betaSorcerer = {
    PARENT: "miniboss",
    LABEL: "Beta Sorcerer",
    DANGER: 8,
    SHAPE: 0,
    COLOR: "veryLightGrey",
    UPGRADE_COLOR: "veryLightGrey",
    SIZE: 30,
    MAX_CHILDREN: 70,
    VALUE: 7e5,
    BODY: {
        FOV: 0.7,
        SPEED: 0.08 * base.SPEED,
        HEALTH: 8 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
    PROPS: [
        {
            POSITION: [23, 0, 0, 0, 1],
            TYPE: [ "eggdeco", { INDEPENDENT: true, COLOR: -1} ],
        },
    ],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [ "sorcerer", { INDEPENDENT: true, COLOR: -1 } ],
        },
    ],
    GUNS: weaponArray({
        POSITION: [3.5, 8.65, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.machineGun, g.machineGunner, { damage: 1.8, size: 0.4, spray: 150, speed: 2, shudder: 1.75 }]),
            TYPE: "minichip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true,
        },
    }, 4)
};

Class.betaExorcistor = {
    PARENT: "miniboss",
    LABEL: "Beta Exorcistor",
    DANGER: 9,
    SHAPE: 5,
    COLOR: "purple",
    UPGRADE_COLOR: "purple",
    SIZE: 28,
    MAX_CHILDREN: 20,
    VALUE: 6e5,
    BODY: {
        FOV: 0.75,
        SPEED: 0.05 * base.SPEED,
        HEALTH: 16 * base.HEALTH,
        DAMAGE: 4.33 * base.DAMAGE,
    },
    GUNS: weaponArray([
        {
            POSITION: [2.2, 9, 0.8, 9.8, 0, 36, 0.5],
            PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.annihilator, {maxSpeed: 1}]),
                TYPE: "demonchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
            },
        },
         {
            POSITION: [1.5, 12, 0.8, 9.8, 0, 36, 0],
            PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.annihilator, {maxSpeed: 1}]),
                TYPE: "betaDemonchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
            },
        }
    ], 5),
    PROPS: [
        {
            POSITION: [16, 0, 0, 0, 1],
            TYPE: [ "pentdeco", { INDEPENDENT: true, COLOR: -1} ],
        },
    ],
}
Class.alphaExorcistor = {
    PARENT: "miniboss",
    LABEL: "Alpha Exorcistor",
    DANGER: 10,
    SHAPE: 5,
    COLOR: "purple",
    UPGRADE_COLOR: "purple",
    SIZE: 30,
    MAX_CHILDREN: 30,
    VALUE: 55e4,
    BODY: {
        FOV: 1.1,
        SPEED: 0.02 * base.SPEED,
        HEALTH: 18 * base.HEALTH,
        DAMAGE: 4.66 * base.DAMAGE, // weak as hell bruh
    },
    GUNS: weaponArray([
        {
            POSITION: [3, 6, 0.8, 9.8, 0, 36, 0.33],
            PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.annihilator, {maxSpeed: 1}]),
                TYPE: "demonchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
            },
        },
         {
            POSITION: [2.2, 9, 0.8, 9.8, 0, 36, 0.66],
            PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.annihilator, {maxSpeed: 1}]),
                TYPE: "betaDemonchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
            },
        },
         {
            POSITION: [1.5, 12, 0.8, 9.8, 0, 36, 1],
            PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.annihilator, {maxSpeed: 1}]),
                TYPE: "alphaDemonchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
            },
        }
    ], 5),
    PROPS: [
        {
            POSITION: [16, 0, 0, 0, 1],
            TYPE: [ "pentdeco", { INDEPENDENT: true, COLOR: -1} ],
        },
        {
            POSITION: [13, 0, 0, 0, 2],
            TYPE: [ "pentdeco2", { INDEPENDENT: true, COLOR: -1} ],
        }
    ],
}
Class.omegaExorcistor = { // why the fuck
    PARENT: "miniboss",
    LABEL: "Omega Exorcistor",
    DANGER: 10,
    SHAPE: 5,
    COLOR: "purple",
    UPGRADE_COLOR: "purple",
    SIZE: 38,
    MAX_CHILDREN: 40,
    VALUE: 55e5,
    BODY: {
        FOV: 1.2,
        SPEED: 0.01 * base.SPEED,
        HEALTH: 30 * base.HEALTH,
        DAMAGE: 10 * base.DAMAGE, // still weak 💔
    },
    GUNS: weaponArray([
         {
            POSITION: [1.5, 4, 1.2, 9.8, 5, 36, 0],
            PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.annihilator, {maxSpeed: 1}]),
                TYPE: "omegaDemonchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
            },
        },
         {
            POSITION: [1.5, 4, 1.2, 9.8, -5, 36, 0.5],
            PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.annihilator, {maxSpeed: 1}]),
                TYPE: "omegaDemonchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
            },
        }
    ], 5),
    PROPS: [
        {
            POSITION: [16, 0, 0, 0, 1],
            TYPE: [ "pentdeco", { INDEPENDENT: true, COLOR: -1} ],
        },
        {
            POSITION: [13, 0, 0, 0, 2],
            TYPE: [ "pentdeco2", { INDEPENDENT: true, COLOR: -1} ],
        },
        {
            POSITION: [10, 0, 0, 0, 3],
            TYPE: [ "pentdeco", { INDEPENDENT: true, COLOR: -1} ],
        }
    ],
}

// Nesters
Class.nestWatcher = {
    PARENT: "miniboss",
    LABEL: "Nest Watcher",
    COLOR: "purple",
    UPGRADE_COLOR: "purple",
    SHAPE: 5,
    SIZE: 40,
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
            POSITION: [1.5, 6, 0.8, 9.8, 0, 36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.constructor, {SIZE: 0.8}]),
                TYPE: "boomerang",
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
            POSITION: [7, 9, 0, 0, 120, 0],
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
        TYPE: ["realchip", {INDEPENDENT: true, COLOR: 'lightGreen', SHAPE: 5}],
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
