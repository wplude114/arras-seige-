const { combineStats, makeAuto, weaponArray } = require('../facilitators.js');
const { base } = require('../constants.js');
const g = require('../gunvals.js');

Class.flailBullet = {
    PARENT: "bullet",
    COLOR: "grey",
    HITS_OWN_TYPE: 'hard',
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: "flailBallSpike",
    }],
}
