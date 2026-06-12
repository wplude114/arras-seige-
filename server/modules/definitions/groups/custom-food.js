const { basePolygonDamage, basePolygonHealth } = require('../constants.js');
const { makeRelic, makeRare, makePrimordial, makeCrasher, makeLaby } = require('../facilitators.js');

Class.hexas = {
    PARENT: "hexagon",
    LABEL: "Hexas",
    VALUE: 5000,
    SIZE: 27,
    GUNS: [],
    TURRETS: [
        {
            POSITION: [7, 8, 0, 60, 180, 0],
            TYPE: "autoTankGun",
        }, {
            POSITION: [7, 8, 0, -120, 180, 0],
            TYPE: "autoTankGun",
        },
    ],
};
