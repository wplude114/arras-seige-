const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./generics.js');
require('./tanks.js');
require('./turrets.js');
require('./dev.js');

Class.miniboss = {
    PARENT: "genericBoss",
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    AI: { NO_LEAD: true },
}
Class.ramMiniboss = {
    PARENT: "genericBoss",
    CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal"],
}
Class.triangleRamDeco = makeDeco(3, 17);
Class.triangleRamDeco2 = makeDeco(3, 5);

Class.boss_1 = {
    PARENT: "ramMiniboss",
    LABEL: "test boss 01",
    VALUE: 30,
    SHAPE: 3,
    SIZE: 27,
    COLOR: 5,
    PROPS: [{
        POSITION: [24],
        TYPE: makeDeco(0, 17)
    },{
        POSITION: [24],
        TYPE: "triangleRamDeco"
    },{
        POSITION: [10,0,0,0,1],
        TYPE: "triangleRamDeco"
    },{
        POSITION: [6,0,0,0,1],
        TYPE: "triangleRamDeco2"
    }],
    GUNS: weaponArray([{
            POSITION: {LENGTH: 12,WIDTH: 13,ASPECT: 0.0001, X: 10,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
              COLOR: 17,
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.1, speed: 0.001, maxSpeed: 0.001, range: 0.05 }]),
                TYPE: ["bullet", { ALPHA: 0 }],
                AUTOFIRE: true,
                ALPHA: 0
            }
        },{
            POSITION: {LENGTH: 12,WIDTH: 14,ASPECT: 0.0001, X: 10,Y: 0,ANGLE: 0,DELAY: 0},
        }],3,0.33)
};

// menu stuff (i dont want to edit dev.js every time i add something)
if (!Class.bosses) Class.bosses = {}; if (!Array.isArray(Class.bosses.UPGRADES_TIER_0)) Class.bosses.UPGRADES_TIER_0 = []; // make sure it exists
// actual stuff
Class.bosses.UPGRADES_TIER_0.push("boss_1");
