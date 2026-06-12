const { basePolygonDamage, basePolygonHealth } = require('../constants.js');
const { makeRelic, makeRare, makePrimordial, makeCrasher, makeLaby } = require('../facilitators.js');

Class.protoDread = {
    PARENT: "genericTank",
    LABEL: "Proto-Dread",
    SIZE: 24,
    SHAPE: 6,
    COLOR: 17,
    FACING_TYPE: ['spin', {speed: 0.02}],
    BODY: {FOV: 1.1},
};

Class.protoDread1 = {
    PARENT: "protoDread",
    LABEL: "Proto-Dread",
    TURRETS: [
        {
            POSITION: [7, 10, 0, 0, 160, 0],
            TYPE: "autoTankGun",
        }, {
            POSITION: [7, 10, 0, 180, 160, 0],
            TYPE: "autoTankGun",
        },
    ],
};

Class.protoJuggernaut = {
    PARENT: "protoDread",
    LABEL: "Proto-Juggernaut",
    TURRETS: [
        {
            POSITION: [7, 10, 0, 0, 160, 0],
            TYPE: "autoTankGun",
        }, {
            POSITION: [7, 10, 0, 180, 160, 0],
            TYPE: "autoTankGun",
        },
        
        {
            POSITION: [7, 10, 0, 60, 160, 0],
            TYPE: "autoTankGun",
        }, {
            POSITION: [7, 10, 0, -120, 160, 0],
            TYPE: "autoTankGun",
        },
    ],
};
