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

if (!Class.bosses) Class.bosses = {}; if (!Array.isArray(Class.bosses.UPGRADES_TIER_0)) Class.bosses.UPGRADES_TIER_0 = [];
// actual stuff
Class.bosses.UPGRADES_TIER_0.push("ravager");
