const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

Class.genericLance = {
  PARENT: "genericTank",
  LABEL: "Lancer",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 0.9
  },
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
}

Class.lancer = {
  PARENT: "genericLance",
  LABEL: "Lancer",
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1, recoil: 0}]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }
  ]
}

Class.trackerLancer = {
  PARENT: "genericLance",
  LABEL: "Tracker Lancer",
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1, recoil: 0}]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }
  ],
  TURRETS: [...Class.genericTank.TURRETS,{
        POSITION: [10, 0, 0, 180, 360, 1],
        TYPE: [
            "tracker3gun",
            {
                CONTROLLERS: ["nearestDifferentMaster"],
                INDEPENDENT: true,
                COLOR: 16,
            },
        ],
    }]
}

Class.wasp = makeOver("lancer", "Wasp", {count: 1, independent: true, cycle: true})

Class.lancer.UPGRADES_TIER_3 = ["wasp", "trackerLancer"]
