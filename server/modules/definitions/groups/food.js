const { basePolygonDamage, basePolygonHealth } = require('../constants.js');
const { makeRelic, makeRare, makePrimordial, makeCrasher, makeLaby, makePolygonTier } = require('../facilitators.js');
// EGGS
Class.egg = {
    PARENT: "food",
    LABEL: "Egg",
    VALUE: 10,
    SHAPE: 0,
    SIZE: 4.5,
    COLOR: "veryLightGrey",
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.5 * basePolygonHealth,
        PENETRATION: 1,
        PUSHABILITY: 0,
        ACCELERATION: 0.015
    },
    DRAW_HEALTH: false,
};

// SQUARES
Class.square = {
    PARENT: "food",
    LABEL: "Square",
    VALUE: 30,
    SHAPE: 4,
    SIZE: 14,
    COLOR: "gold",
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
        ACCELERATION: 0.0075
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};

// TRIANGLES
Class.triangle = {
    PARENT: "food",
    LABEL: "Triangle",
    VALUE: 120,
    SHAPE: 3,
    SIZE: 10,
    COLOR: "orange",
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
        ACCELERATION: 0.005
    },
    DRAW_HEALTH: true,
};

// PENTAGONS
Class.pentagon = {
    PARENT: "food",
    LABEL: "Pentagon",
    VALUE: 400,
    SHAPE: 5,
    SIZE: 21,
    COLOR: "purple",
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
        ACCELERATION: 0.0035
    },
    DRAW_HEALTH: true,
};

// HEXAGONS
Class.hexagon = {
    PARENT: "food",
    LABEL: "Hexagon",
    VALUE: 500,
    SHAPE: 6,
    SIZE: 25,
    COLOR: "hexagon",
    BODY: {
        DAMAGE: 3 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 20 * basePolygonHealth,
        RESIST: 1.3,
        SHIELD: 50 * basePolygonHealth,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
};
