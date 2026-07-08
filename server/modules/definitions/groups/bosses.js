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
    UPGRADE_TOOLTIP: "A §#db190b§Miniboss§reset§ made to test turrets and designs.\n- autoTankGun [x3]",
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
    UPGRADE_TOOLTIP: "A weak §#db190b§Miniboss§reset§.\n- bossMachineGun [x5]\n- (Mounted) bossTripleGun [x1]",
    COLOR: "#37ff00",
    UPGRADE_COLOR: "#db190b",
    SHAPE: 5.5,
    SIZE: 40,
    VALUE: 25e4,
    DISPLAY_NAME: false,
    TURRETS: turretArray([
        {
            POSITION: [6, 9, 0, 0, 150, -1],
            TYPE: ["bossMachineGun", {INDEPENDENT: false, HAS_NO_RECOIL: true}]
        },
    ],5)
}
Class.ravager.TURRETS.push(
 {
            POSITION: [7, 0, 0, 0, 360, 1],
            TYPE: ["bossTripleGun", {INDEPENDENT: false, HAS_NO_RECOIL: true, COLOR: "mirror"}]
        }   
);

Class.distributer = {
    PARENT: "miniboss",
    NAME: "",
    LABEL: "§#00ffd0§Distributer",
    UPGRADE_LABEL: "Distributer (MK II)",
    UPGRADE_TOOLTIP: "A modified version of the §#37ff00§Ravager§reset§ with 6 sides.\n- bossMachineGun [x6]\n- (Mounted) bossMachineGun [x8]",
    COLOR: "#00ffd0",
    UPGRADE_COLOR: "#db190b",
    SHAPE: 6,
    SIZE: 43,
    VALUE: 25e5,
    DISPLAY_NAME: false,
    TURRETS: turretArray([
        {
            POSITION: [6, 9, 0, 0, 150, -2],
            TYPE: ["bossMachineGun", {INDEPENDENT: false, HAS_NO_RECOIL: true}]
        },
        {
            POSITION: [4, 7, 0, 30, 200, 1],
            TYPE: ["bossMachineGun", {INDEPENDENT: false, HAS_NO_RECOIL: true, COLOR: "mirror"}]
        },
    ],6)
}
Class.distributer.TURRETS.push(
    {
        POSITION: [7, 0, 0, 180, 360, 1],
        TYPE: ["bossMachineGun", {INDEPENDENT: false, HAS_NO_RECOIL: true}]
    }   
);
Class.distributer.TURRETS.push(
    {
        POSITION: [5, 0, 0, 0, 360, 1],
        TYPE: ["bossMachineGun", {INDEPENDENT: false, HAS_NO_RECOIL: true, COLOR: "mirror"}]
    }   
);

// menu stuff (i dont want to edit dev.js every time i add something)
if (!Class.bosses) Class.bosses = {}; if (!Array.isArray(Class.bosses.UPGRADES_TIER_0)) Class.bosses.UPGRADES_TIER_0 = []; // make sure it exists
// actual stuff
Class.bosses.UPGRADES_TIER_0.push("boss_1", "ravager", "distributer");
