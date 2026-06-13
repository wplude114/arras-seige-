const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

Class.lancer = {
  PARENT: "genericTank",
  LABEL: "Lancer",
  BODY: {
    SPEED: base.SPEED * 1.2,
    DAMAGE: base.DAMAGE * 0.9
  },
  HAS_NO_RECOIL: true,
  STAT_NAMES: {
    BULLET_SPEED: 'Lance Range',
    BULLET_HEALTH: 'Lance Longevity',
    BULLET_PEN: 'Lance Sharpness',
    BULLET_DAMAGE: 'Lance Damage',
    RELOAD: 'Lance Density'
  },
  GUNS: [
    {
      POSITION: [20, 15, 0.001, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.4, speed: 0.1, maxSpeed: 0.1, range: 0.1 }]),
        TYPE: ["bullet", { ALPHA: 0 }],
        AUTOFIRE: true
      }
    },
    {
      POSITION: [25, 15, 0.001, 0, 0, 0, 0]
    }
  ]
}

Class.basic.UPGRADES_TIER_2.push("lancer");
