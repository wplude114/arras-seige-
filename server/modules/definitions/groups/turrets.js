const { combineStats, makeDeco, weaponArray, makeTurret } = require('../facilitators.js');
const { base } = require('../constants.js');
const g = require('../gunvals.js');

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
