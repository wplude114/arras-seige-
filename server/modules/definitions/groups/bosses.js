const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, turretArray, setTurretProjectileRecoil } = require('../facilitators.js');
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
Class.hexagonCoreDeco = makeDeco(6.25, 17);
Class.triangleCoreDeco = makeDeco(3.25, 5);

Class.boss_1 = {
    PARENT: "miniboss",
    LABEL: "test boss 01",
    INDEPENDENT: true,
    VALUE: 35e5,
    SHAPE: 3,
    SIZE: 27,
    COLOR: 5,
    PROPS: [{
        POSITION: [25],
        TYPE: "hexagonCoreDeco"
    },{
        POSITION: [24],
        TYPE: "triangleRamDeco"
    },{
        POSITION: [10,0,0,0,1],
        TYPE: "hexagonCoreDeco"
    },{
        POSITION: [7,0,0,0,1],
        TYPE: "triangleCoreDeco"
    }],
    TURRETS: turretArray([
        {
            POSITION: [4, 10, 0, 0, 360, 2],
            TYPE: ["autoTankGun", {INDEPENDENT: true, HAS_NO_RECOIL: true}]
        },
    ],3)
};

Class.ravager = {
    PARENT: "miniboss",
    NAME: "",
    LABEL: "§#37ff00§Ravager",
    UPGRADE_LABEL: "Ravager",
    UPGRADE_TOOLTIP: "A weak §#db190b§Miniboss§reset§ with 5 machine gun turrets and a mounted triple turret.",
    COLOR: "#37ff00",
    UPGRADE_COLOR: "#db190b",
    SHAPE: 5.5,
    SIZE: 40,
    DISPLAY_NAME: false,
    
    TURRETS: turretArray([
        {
            POSITION: [5, 9, 0, 0, 150, -1],
            TYPE: ["autoMachineGun", {INDEPENDENT: false, HAS_NO_RECOIL: true}]
        },
    ],5)
}

// menu stuff (i dont want to edit dev.js every time i add something)
if (!Class.bosses) Class.bosses = {}; if (!Array.isArray(Class.bosses.UPGRADES_TIER_0)) Class.bosses.UPGRADES_TIER_0 = []; // make sure it exists
// actual stuff
Class.bosses.UPGRADES_TIER_0.push("boss_1", "ravager");
