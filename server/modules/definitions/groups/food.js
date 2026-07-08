const { basePolygonDamage, basePolygonHealth } = require('../constants.js');
const { makeLaby, makeRammer, makeSanc } = require('../facilitators.js');

Class.triangle = {
    PARENT: "food",
    LABEL: "Triangle",
    VALUE: 30,
    SHAPE: 3,
    SIZE: 10,
    COLOR: 5,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
        ACCELERATION: 0.0075
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};

Class.square = {
    PARENT: "food",
    LABEL: "Square",
    VALUE: 120,
    SHAPE: 4,
    SIZE: 17,
    COLOR: 0,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
        ACCELERATION: 0.005
    },
    DRAW_HEALTH: true,
};

Class.pentagon = {
    PARENT: "food",
    LABEL: "Pentagon",
    VALUE: 400,
    SHAPE: 5,
    SIZE: 21,
    COLOR: 4,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
        ACCELERATION: 0.0035
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

Class.hexagon = {
    PARENT: "food",
    LABEL: "Hexagon",
    VALUE: 750,
    SHAPE: 6,
    SIZE: 25,
    COLOR: "#889abd",
    BODY: {
        DAMAGE: 3 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 20 * basePolygonHealth,
        RESIST: 1.3,
        SHIELD: 50 * basePolygonHealth,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

Class.septagon = {
    PARENT: "food",
    LABEL: "Septagon",
    VALUE: 1500,
    SHAPE: 7,
    SIZE: 27,
    COLOR: 1,
    BODY: {
        DAMAGE: 5 * basePolygonDamage,
        DENSITY: 10,
        HEALTH: 32 * basePolygonHealth,
        RESIST: 1.4,
        SHIELD: 64 * basePolygonHealth,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

Class.octagon = {
    PARENT: "food",
    LABEL: "Octagon",
    VALUE: 4500,
    SHAPE: 8,
    SIZE: 36,
    COLOR: "lavender",
    BODY: {
        DAMAGE: 6 * basePolygonDamage,
        DENSITY: 20,
        HEALTH: 52 * basePolygonHealth,
        RESIST: 1.6,
        SHIELD: 76 * basePolygonHealth,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

let polyNames = [ "triangle", "square", "pentagon", "hexagon", "septagon", "octagon" ]
const tierNames = [ null, 'beta', 'alpha', 'gamma' ];
for (let tier = 1; tier < tierNames.length; tier++) {
    let nextShape = null;
    for (let i = 0; i < polyNames.length; i++) {
        
        nextShape = (i + 1 < polyNames.length) ? polyNames[i + 1] : polyNames[0];
        const polyLower = polyNames[i];
        
        const food = polyLower;
        let polyName = polyLower[0].toUpperCase() + polyLower.slice(1);
        const tierPrefix = tierNames[tier];

        const baseClass = Class[food];
        if (!baseClass || typeof baseClass !== 'object') {
            console.warn(`Skipping creation of ${tierPrefix ? tierPrefix : ''}${polyName}: base class Class[${food}] not found.`);
            continue;
        }

        if (tierPrefix) polyName = tierPrefix + polyName;
        Class[polyName] = makeLaby(baseClass, tier, (food == "triangle" && tier > 0) ? 0.5 : 1);
        if (tier > 3) { Class[polyName].CAN_BE_ON_LEADERBOARD = true }
        console.log("[food.js] Created "+polyName + ". Creating upgrades now.")
        
        if (!baseClass.UPGRADES_TIER_0) baseClass.UPGRADES_TIER_0 = [];
        baseClass.UPGRADES_TIER_0.push(Class[polyName])
        
        if (!baseClass.UPGRADES_TIER_1) baseClass.UPGRADES_TIER_1 = [];
        if (nextShape) baseClass.UPGRADES_TIER_1 = [Class[nextShape]]

        if (!Class[polyName].UPGRADES_TIER_0) Class[polyName].UPGRADES_TIER_0 = [];
        Class[polyName].UPGRADES_TIER_0 = [baseClass]
    }
}

// make variants
const variants = [
  { prefix: 'rammer', factory: baseClass => makeRammer(baseClass) },
  { prefix: 'enchanced', factory: baseClass => makeSanc(baseClass) },
  // { prefix: 'laby', factory: baseClass => makeLaby(baseClass, /*tier=*/1, /*mult=*/1) },
];

for (let i = 0; i < polyNames.length; i++) {
  const polyLower = polyNames[i];
  const baseClass = Class[polyLower];
  if (!baseClass || typeof baseClass !== 'object') {
    console.warn(`Skipping variants for ${polyLower}: base class Class[${polyLower}] not found.`);
    continue;
  }

  const baseDisplayName = polyLower[0].toUpperCase() + polyLower.slice(1);

  for (const variant of variants) {
    // build the new class name and create it using the provided factory
    const polyName = variant.prefix + baseDisplayName;
    Class[polyName] = variant.factory(baseClass);

    console.log(`[food.js] Created ${polyName}`);

    // preserve upgrade relationships like original loop did
    if (!baseClass.UPGRADES_TIER_0) baseClass.UPGRADES_TIER_0 = [];
    baseClass.UPGRADES_TIER_0.push(Class[polyName]);

    if (!Class[polyName].UPGRADES_TIER_0) Class[polyName].UPGRADES_TIER_0 = [];
    Class[polyName].UPGRADES_TIER_0 = [baseClass];
  }
}

Class.enchancedSquare = { // only for square bc i dont like how it is!!!
    PARENT: "square",
    LABEL: "Enchanced Square",
    VALUE: 210,
    SHAPE: 4,
    SIZE: 13.6,
    GIVE_KILL_MESSAGE: true,
    GUNS: weaponArray([
			 {
            POSITION: {LENGTH: 13,WIDTH: 6,ASPECT: 1, X: 0,Y: 0,ANGLE: 0,DELAY: 0},
        },
        {
            POSITION: {LENGTH: 2,WIDTH: 6,ASPECT: 1.4, X: 13,Y: 0,ANGLE: 0,DELAY: 0},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {range: 0.3, damage: 0.2, recoil: 0, speed: 0.3}]),
                TYPE: "trap",
				AUTOFIRE: true,
            }
        },
		],4,0.25),
};
