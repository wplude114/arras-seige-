const { combineStats, makeDeco, weaponArray, makeTurret } = require('../facilitators.js');
const { base } = require('../constants.js');
const g = require('../gunvals.js');

// tank guns
Class.autoTankGun = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoTankTracker = makeTurret({
    GUNS: [
        {
            POSITION: [20, 10, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [10, 13, 0.25, 18, 0, 0, 0],
        },
    ],
}, {canRepel: true, limitFov: true, fov: 4})

// boss guns
Class.bossMachineGun = makeTurret({
    GUNS: [
        {
            POSITION: [16, 10, 2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, {damage: 0.5}]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 2})
Class.bossTripleGun = makeTurret({
    GUNS: [
        {
            POSITION: [16, 9, 1, 0, 5, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, {damage: 0.5}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 9, 1, 0, -5, 0, 0.666],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, {damage: 0.5}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, {damage: 0.5}]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 3})
