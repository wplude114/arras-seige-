const { combineStats, menu, menuvar2, addAura, makeDeco, LayeredBoss, newWeapon, weaponArray, makeRadialAuto, makeTurret } = require('../facilitators.js');
const { base, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

Class.tennisBirdProjectile = {
	PARENT: "bullet",
	SHAPE: "https://cdn.discordapp.com/emojis/1447472307663802479.webp?size=40",
	HITS_OWN_TYPE: 'hard',
}

Class.tennisBird = {
	PARENT: "genericTank",
	LABEL: "Tennis Bird",
	UPGRADE_TOOLTIP: '"1447472307663802479.webp"',
	SHAPE: "https://cdn.discordapp.com/emojis/1447472307663802479.webp?size=40", // offical emoji in arrascord, wont break anytime soon :)
	HITS_OWN_TYPE: 'hard',
}
Class.tennisBird.REBOOT_UPGRADE_TREE = "tennisBird"
Class.tennisBirdUPG = {
	PARENT: "genericTank",
	LABEL: "Tennis Bird",
	UPGRADE_TOOLTIP: '"1447472307663802479.webp"',
	SHAPE: "https://cdn.discordapp.com/emojis/1447472307663802479.webp?size=40",
	HITS_OWN_TYPE: 'hard',
	GUNS: [
		{POSITION: [0,13], PROPERTIES: {SHOOT_SETTINGS: combineStats([g.basic,{reload: 0.5, range: 10, speed: 0}]),TYPE: "tennisBirdProjectile",}}
	]
}
Class.tennisBirdUPG.REBOOT_UPGRADE_TREE = "tennisBird"

// upgrades
Class.addons.UPGRADES_TIER_0.push("tennisBird");
Class.tennisBird.UPGRADES_TIER_0 = ["tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG", "tennisBirdUPG"];
