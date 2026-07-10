const { combineStats, menu, menuvar2, addAura, makeDeco, LayeredBoss, newWeapon, weaponArray, makeRadialAuto, makeTurret } = require('../facilitators.js');
const { base, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

Class.tennisBird = {
	PARENT: "genericTank",
	LABEL: "Tennis Bird",
	UPGRADE_TOOLTIP: '"1447472307663802479.webp"',
	SHAPE: "https://cdn.discordapp.com/emojis/1447472307663802479.webp?size=40", // offical emoji in arrascord, wont break anytime soon :)
	HITS_OWN_TYPE: 'hard',
}

Class.addons.UPGRADES_TIER_0.push("tennisBird");
