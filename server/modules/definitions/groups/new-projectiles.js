const { combineStats, makeAuto, weaponArray } = require('../facilitators.js');
const { base } = require('../constants.js');
const g = require('../gunvals.js');

// bullet turrets
Class.autoMissileGun = makeTurret({
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun, g.turret, g.power, g.autoTurret, { density: 0.1 }]),
                TYPE: "bullet",
                WAIT_TO_CYCLE: true
            },
        },
    ],
}, {independent: true, extraStats: []})

Class.flailBullet = {
    PARENT: "bullet",
    HITS_OWN_TYPE: 'hard',
    INDEPENDENT: true,
    FACING_TYPE: ['spin', {speed: 0.05}],
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: "flailBallSpike",
    }],
}

Class.flailSplitBullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    FACING_TYPE: ['spin', {speed: 0.05}],
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: "flailBallSpike",
    },{
        POSITION: [7, 0, 0, 0, 0, 1],
        TYPE: "genericEntity",
    }],

    GUNS: [
        {
            POSITION: [8, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["flailBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
        {
            POSITION: [8, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["flailBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
        {
            POSITION: [8, 8, 1, 0, 0, -120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["flailBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
        {
            POSITION: [8, 8, 1, 0, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["flailBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
        {
            POSITION: [8, 8, 1, 0, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["flailBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
        {
            POSITION: [8, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["flailBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
    ]
}

Class.flailMissle = {
    PARENT: "bullet",
    HITS_OWN_TYPE: 'hard',
    INDEPENDENT: true,
    FACING_TYPE: ['spin', {speed: 0.05}],
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: "flailBallSpike",
    },{
        POSITION: [7, 0, 0, 0, 0, 1],
        TYPE: "autoMissleGun",
    }],
}
