const { basePolygonDamage, basePolygonHealth } = require('../constants.js');
const { makeCrasher, makeLaby, makePolygonTier } = require('../facilitators.js');

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
Class.betaTriangleTEST = {
    PARENT: "food",
    LABEL: "Beta Triangle",
    VALUE: 300,
    SHAPE: 3,
    SIZE: 20,
    COLOR: 5,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth*2,
        PENETRATION: 2,
        ACCELERATION: 0.0075
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    PROPS: [
        {POSITION: [10,0,0,45,0,1]}
    ]
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
};
