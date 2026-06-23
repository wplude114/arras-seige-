const { basePolygonDamage, basePolygonHealth } = require('../constants.js');
const { makeCrasher, makeLaby } = require('../facilitators.js');

Class.triangle = {
    PARENT: "food",
    LABEL: "Triangle",
    VALUE: 30,
    SHAPE: 3,
    SIZE: 10,
    COLOR: 5,
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

Class.square = {
    PARENT: "food",
    LABEL: "Square",
    VALUE: 120,
    SHAPE: 4,
    SIZE: 15,
    COLOR: 0,
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

Class.pentagon = {
    PARENT: "food",
    LABEL: "Pentagon",
    VALUE: 400,
    SHAPE: 5,
    SIZE: 21,
    COLOR: 4,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
        ACCELERATION: 0.0035
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

Class.hexagon = {
    PARENT: "food",
    LABEL: "Hexagon",
    VALUE: 500,
    SHAPE: 6,
    SIZE: 25,
    COLOR: 2,
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
    GIVE_KILL_MESSAGE: true,
};

Class.septagon = {
    PARENT: "food",
    LABEL: "Septagon",
    VALUE: 730,
    SHAPE: 7,
    SIZE: 27,
    COLOR: 1,
    BODY: {
        DAMAGE: 5 * basePolygonDamage,
        DENSITY: 10,
        HEALTH: 32 * basePolygonHealth,
        RESIST: 1.4,
        SHIELD: 64 * basePolygonHealth,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

Class.octagon = {
    PARENT: "food",
    LABEL: "Octagon",
    VALUE: 1330,
    SHAPE: 8,
    SIZE: 36,
    COLOR: "lavender",
    BODY: {
        DAMAGE: 6 * basePolygonDamage,
        DENSITY: 20,
        HEALTH: 52 * basePolygonHealth,
        RESIST: 1.6,
        SHIELD: 76 * basePolygonHealth,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

Class.nonagon = {
    PARENT: "food",
    LABEL: "Nonagon",
    VALUE: 1640,
    SHAPE: 9,
    SIZE: 40,
    COLOR: 7,
    BODY: {
        DAMAGE: 8 * basePolygonDamage,
        DENSITY: 23,
        HEALTH: 67 * basePolygonHealth,
        RESIST: 1.7,
        SHIELD: 126 * basePolygonHealth,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

Class.decagon = {
    PARENT: "food",
    LABEL: "Decagon",
    VALUE: 2040,
    SHAPE: 10,
    SIZE: 51,
    COLOR: "tangerine",
    BODY: {
        DAMAGE: 10 * basePolygonDamage,
        DENSITY: 27,
        HEALTH: 80 * basePolygonHealth,
        RESIST: 2,
        SHIELD: 273 * basePolygonHealth,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// triangle
Class.betaTriangle = makeLaby(Class.triangle, 1);
Class.alphaTriangle = makeLaby(Class.triangle, 2);
// square
Class.betaSquare = makeLaby(Class.square, 1);
Class.alphaSquare = makeLaby(Class.square, 2);
// pentagon
Class.betaPentagon = makeLaby(Class.pentagon, 1);
Class.alphaPentagon = makeLaby(Class.pentagon, 2);
// hexagon
Class.betaHexagon = makeLaby(Class.hexagon, 1);
Class.alphaHexagon = makeLaby(Class.hexagon, 2);
// septagon
Class.betaSeptagon = makeLaby(Class.septagon, 1);
Class.alphaSeptagon = makeLaby(Class.septagon, 2);
// octagon
Class.betaOctagon = makeLaby(Class.octagon, 1);
Class.alphaOctagon = makeLaby(Class.octagon, 2);
// nonagon
Class.betaNonagon = makeLaby(Class.nonagon, 1);
Class.alphaNonagon = makeLaby(Class.nonagon, 2);
// decagon
Class.betaDecagon = makeLaby(Class.decagon, 1);
Class.alphaDecagon = makeLaby(Class.decagon, 2);
