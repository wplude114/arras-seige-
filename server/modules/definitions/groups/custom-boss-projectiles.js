const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');
require('./bosses.js');


Class.betaDemonchip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 5,
    DRAW_HEALTH: true,
    PROPS: [
        {
            POSITION: [16, 0, 0, 0, 1],
            TYPE: [ "pentdeco", { INDEPENDENT: true, COLOR: -1} ],
        }
    ],
};
Class.alphaDemonchip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 5,
    DRAW_HEALTH: true,
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
};
Class.omegaDemonchip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 5,
    DRAW_HEALTH: true,
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
};
