const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Basic & starting upgrades
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {LENGTH: 20,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 5,WIDTH: 8,ASPECT: 1, X: 14,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: {LENGTH: 12,WIDTH: 8,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
    ]
}

// Upgrade Paths
//Class.basic.UPGRADES_TIER_1 = []

