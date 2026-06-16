const { combineStats, skillSet, makeAuto, addAura, LayeredBoss, makeDeco, weaponArray, setTurretProjectileRecoil } = require('../facilitators.js');
const { base, smshskl } = require('../constants.js');
const g = require('../gunvals.js');

Class.castleBase = {
  PARENT: "genericTank",
  SHAPE: 3,
  COLOR: 17,
  FACING_TYPE: ["spin", { speed: 0.02}],
}
console.log('[castleUpgrades] Created Castle Base (upgrades to telestial or terrestrial)');

Class.addons.UPGRADES_TIER_0.push("castleBase");
  Class.castleBase.UPGRADES_Tier_1 = Class.terrestrals.UPGRADES_TIER_0
  Class.castleBase.UPGRADES_Tier_2 = Class.celestials.UPGRADES_TIER_0
