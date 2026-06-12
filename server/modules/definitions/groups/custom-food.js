const { basePolygonDamage, basePolygonHealth } = require('../constants.js');
const { makeRelic, makeRare, makePrimordial, makeCrasher, makeLaby } = require('../facilitators.js');

Class.hexas = {
    PARENT: "hexagon",
    LABEL: "Hexas",
    VALUE: 5000,
    SIZE: 24,
    CONTROLLERS: ["spin","nearestDifferentMaster", ["minion", {orbit: 80}]],
    BODY: {FOV: 0.8},
    GUNS: [],
    TURRETS: [
        {
            POSITION: [7, 10, 0, 60, 160, 0],
            TYPE: "autoTankGun",
        }, {
            POSITION: [7, 10, 0, -120, 160, 0],
            TYPE: "autoTankGun",
        },
    ],
};
