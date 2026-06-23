const { combineStats, menu, menuvar2, addAura, makeDeco, LayeredBoss, newWeapon, weaponArray, makeRadialAuto, makeTurret } = require('../facilitators.js');
const { base, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');
require('./tanks.js');
require('./food.js');

// Menus
Class.developer = {
    PARENT: "genericTank",
    LABEL: "Developer",
    BODY: {
        FOV: 2,
    },
    SKILL_CAP: Array(10).fill(dfltskl),
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: false,
    IS_IMMUNE_TO_TILES: false,
    DRAW_HEALTH: true,
    ARENA_CLOSER: true,
    INVISIBLE: [0, 0],
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    NECRO: false,
	BODY: {
        PUSHABILITY: 0,
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
}
Class.developer.REROOT_UPGRADE_TREE = "developer"
Class.spectator = {
    PARENT: "genericTank",
    LABEL: "Spectator",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    IGNORED_BY_AI: true,
    ARENA_CLOSER: true,
    IS_IMMUNE_TO_TILES: true,
    TOOLTIP: "Left click to teleport, Right click above or below the screen to change FOV",
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        PUSHABILITY: 0,
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
    GUNS: [{
        POSITION: [0,0,0,0,0,0,0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.2}, g.fake]),
            TYPE: "bullet",
            ALPHA: 0
        }
    }, {
        POSITION: [0, 0, 0, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.25 }, g.fake]),
            TYPE: "bullet",
            ALPHA: 0,
            ALT_FIRE: true,
        }
    }],
    ON: [{
        event: "fire",
        handler: ({ body }) => {
            body.x = body.x + body.control.target.x
            body.y = body.y + body.control.target.y
        }
    }, {
        event: "altFire",
        handler: ({ body }) => body.FOV = body.y + body.control.target.y < body.y ? body.FOV + 0.5 : Math.max(body.FOV - 0.5, 0.2)
    }]
}

Class.generatorBase = {
    PARENT: "genericTank",
    LABEL: "Generator",
    ALPHA: 0,
    IGNORED_BY_AI: true,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    IS_IMMUNE_TO_TILES: true,
    SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
    BODY: {
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
}
Class.navdeco = makeDeco(-5);
Class.nav = menu("Entities and values")
Class.nav.PROPS = [
    {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: "navdeco"
    }
]
Class.miscdeco = makeDeco(-4.5);
Class.misc = menuvar2("Misc.")
Class.misc.PROPS = [
    {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: "miscdeco"
    }
]
Class.bosses = menu("Bosses")
Class.bosses.REROOT_UPGRADE_TREE = "bosses"

Class.tanks = menu("Tanks")

Class.levels = menu("Levels")
Class.levels.UPGRADES_TIER_0 = []
for (let i = 0; i < 16; i++) {
    let LEVEL = i * Config.TIER_MULTIPLIER;
    Class["level" + LEVEL] = {
        PARENT: "levels",
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    Class.levels.UPGRADES_TIER_0.push("level" + LEVEL);
}

Class.addons = menuvar2("Addon Entities", "black")
Class.addons.UPGRADES_TIER_0 = []

// misc tanks
Class.volute = {
    PARENT: "genericTank",
    LABEL: "Volute",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 13, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.pounder]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            },
        },
        {
            POSITION: [5, 10, 2.125, 1, -6.375, 90, 0],
        },
        {
            POSITION: [5, 10, 2.125, 1, 6.375, -90, 0],
        },
    ],
}

Class.gunner3 = makeRadialAuto("auto4gun", {isTurret: true, danger: 7, size: 13, x: 6, label: "Gunner-3"})

// Whirlwind
Class.whirlwindDeco = makeDeco(6)
Class.whirlwindDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.tornadoDeco = makeDeco(4)
Class.tornadoDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.megaTornadoDeco = makeDeco([[0,-1],[0.5,0],[0,1],[-0.5,0]])
Class.megaTornadoDeco.CONTROLLERS = [["spin", { independent: true }]]
Class.thunderboltDeco = makeDeco(4)
Class.thunderboltDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.16 }]]
Class.hurricaneDeco = makeDeco(8)
Class.hurricaneDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.typhoonDeco = makeDeco(10)
Class.typhoonDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.tempestDeco1 = makeDeco(3)
Class.tempestDeco1.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.tempestDeco2 = makeDeco(3)
Class.tempestDeco2.CONTROLLERS = [["spin", { independent: true, speed: -0.128 }]]
Class.blizzardDeco1 = makeDeco(5)
Class.blizzardDeco1.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.blizzardDeco2 = makeDeco(5)
Class.blizzardDeco2.CONTROLLERS = [["spin", { independent: true, speed: -0.128 }]]

Class.whirlwind = {
    PARENT: "genericTank",
    LABEL: "Whirlwind",
    ANGLE: 60,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
		...Class.genericTank.TURRETS,
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "whirlwindDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    },
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 6; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 60}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}

// misc tanks, cont.
Class.masterBullet = {
    PARENT: "missile",
    FACING_TYPE: "veryfastspin",
    MOTION_TYPE: "motor",
    HAS_NO_RECOIL: false,
    DIE_AT_RANGE: false,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
    ],
}
Class.master = {
    PARENT: "genericTank",
    LABEL: "Master",
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
    },
    DANGER: 8,
    GUNS: [
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "masterBullet",
                MAX_CHILDREN: 4,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}
Class.jumpSmasher = {
    PARENT: "genericSmasher",
    LABEL: "Jump Smasher",
    DANGER: 7,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}
Class.lamgSpinnerTurret = {
    PARENT: "genericTank",
    LABEL: "Spinner Turret",
    COLOR: "grey",
    GUNS: weaponArray({
        POSITION: [15, 3.5, 1, 0, 0, 0, 0]
    }, 10)
}
Class.literallyAMachineGun = {
    PARENT: "genericTank",
    LABEL: "Literally a Machine Gun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2
    },
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    TURRETS: [
        {
            POSITION: [10, 14, 0, 0, 0, 1],
            TYPE: "lamgSpinnerTurret"
        }
    ],
    GUNS: [
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0]
        }
    ]
}

// literally a tank
class io_turretWithMotion extends IO {
    constructor(b, opts = {}) {
        super(b)
    }
    think(input) {
        return {
            target: this.body.master.velocity,
            main: true,
        };
    }
}
ioTypes.turretWithMotion = io_turretWithMotion
Class.latTop = makeDeco(0)
Class.latDeco1 = {
    PARENT: "genericTankNoBody",
    LABEL: "Tank Deco",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#5C533F",
    SHAPE: "M -1 -2 C -1 -2 -1 -3 0 -3 C 1 -3 1 -2 1 -2 V 2 C 1 2 1 3 0 3 C -1 3 -1 2 -1 2 V -2",
    MIRROR_MASTER_ANGLE: true,
}
Class.latDeco2 = {
    PARENT: "genericTankNoBody",
    LABEL: "Tank Deco",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#5C533F",
    SHAPE: "M -2 0 H 2 L 0 1 L -2 0",
    MIRROR_MASTER_ANGLE: true,
}
Class.latDeco3 = {
    PARENT: "genericTankNoBody",
    LABEL: "Tank Deco",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#3F3B2D",
    SHAPE: "M -10 -1 L 10 -1 L 10 1 L -10 1 L -10 -1",
    MIRROR_MASTER_ANGLE: true,
}
Class.latRight = {
    PARENT: "genericTankNoBody",
    LABEL: "Tank Side",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#96794E",
    SHAPE: "M -6 0 H 5 V 1 C 5 2 4 2 4 2 H -5 C -6 2 -6 1 -6 1 V 0",
    MIRROR_MASTER_ANGLE: true,
    TURRETS: [
        {
            POSITION: [4.8, 31, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 24, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 17, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -42, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -35, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -28, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [18, -5, 0, 0, 0, 1],
            TYPE: "latDeco2",
        },
    ]
}
Class.latLeft = {
    PARENT: "genericTankNoBody",
    LABEL: "Tank Side",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#96794E",
    SHAPE: "M -5 0 H 6 V 1 C 6 2 5 2 5 2 H -4 C -5 2 -5 1 -5 1 V 0",
    MIRROR_MASTER_ANGLE: true,
    TURRETS: [
        {
            POSITION: [4.8, -31, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -24, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -17, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 42, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 35, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 28, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [18, 5, 0, 0, 0, 1],
            TYPE: "latDeco2",
        },
    ]
}
Class.latBase = {
    PARENT: "genericTankNoBody",
    LABEL: "Tank Base",
    CONTROLLERS: ["turretWithMotion"],
    COLOR: "#96794E",
    SHAPE: [
        [1.1, 1],
        [1.4, 0],
        [1.1, -1],
        [-1.1, -1],
        [-0.8, 0],
        [-1.1, 1]
    ],
    GUNS: [
        {
            POSITION: [16, 5.5, 1, 1, 6.5, 0, 0]
        },
        {
            POSITION: [14.5, 5.5, 1, 1, 6.5, 0, 0]
        },
        {
            POSITION: [13, 5.5, 1, 1, 6.5, 0, 0]
        },
        {
            POSITION: [16, 5.5, 1, 1, -6.5, 0, 0]
        },
        {
            POSITION: [14.5, 5.5, 1, 1, -6.5, 0, 0]
        },
        {
            POSITION: [13, 5.5, 1, 1, -6.5, 0, 0]
        },
        {
            POSITION: [13, 5.5, 1, 1, 6.5, 180, 0]
        },
        {
            POSITION: [11.5, 5.5, 1, 1, 6.5, 180, 0]
        },
        {
            POSITION: [10, 5.5, 1, 1, 6.5, 180, 0]
        },
        {
            POSITION: [8.5, 5.5, 1, 1, 6.5, 180, 0]
        },
        {
            POSITION: [13, 5.5, 1, 1, -6.5, 180, 0]
        },
        {
            POSITION: [11.5, 5.5, 1, 1, -6.5, 180, 0]
        },
        {
            POSITION: [10, 5.5, 1, 1, -6.5, 180, 0]
        },
        {
            POSITION: [8.5, 5.5, 1, 1, -6.5, 180, 0]
        },
    ],
    TURRETS: [
        {
            POSITION: [5.3, 0, -10, 0, 0, 1],
            TYPE: "latLeft",
        },
        {
            POSITION: [5.3, 0, -10, 180, 0, 1],
            TYPE: "latRight",
        },
        {
            POSITION: [2, 0, -1.4, 90, 0, 1],
            TYPE: "latDeco3",
        },
    ]
}
Class.literallyATank = {
    PARENT: "genericTankNoBody",
    DANGER: 6,
    BODY: {
        HEALTH: base.HEALTH * 1.2,
    },
    LABEL: "Literally a Tank",
    SHAPE: "M -1 -1 H 0 C 1 -1 1 0 1 0 C 1 0 1 1 0 1 H -1 V -1",
    GUNS: [
        {
            POSITION: [30, 8, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [4, 8, -1.4, 8, 0, 0, 0]
        },
        {
            POSITION: [12, 8, 1.3, 30, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 3, damage: 1.2, shudder: 0.5 }]),
                TYPE: "developerBullet"
            }
        },
        {
            POSITION: [2, 11, 1, 34, 0, 0, 0]
        }
    ],
    TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: [ "latTop", { COLOR: "#5C533F" } ],
        },
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: [ "latTop", { COLOR: "#736245" } ],
        },
        {
            POSITION: [35, 0, 0, 0, 360, 0],
            TYPE: [ "latBase", { COLOR: "#96794E" } ],
        },
    ]
}

// FLAIL!!!
Class.flailBallSpike = {
    PARENT: "genericTankNoBody",
    COLOR: "black",
    SHAPE: 6,
    INDEPENDENT: true,
}
Class.flailBall = {
    PARENT: "genericTankNoBody",
    COLOR: "grey",
    HITS_OWN_TYPE: 'hard',
    INDEPENDENT: true,
    PROPS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: makeDeco(6,"black"),
    }],
    GUNS: [
        { 
            POSITION: {WIDTH: 8, LENGTH: 10},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {
                    range: 0.1,
                    speed: 0,
                    maxSpeed: 0,
                    recoil: 0,
                    reload: 0.1,
                    damage: 4,
                    size: 2,
                    health: 1,
                }]),
                TYPE: ["bullet", {
                    ALPHA: 0,
                    ON: [{
                        event: 'tick',
                        handler: ({body}) => {
                            body.DAMAGE -= 1;
                            body.SIZE -= 0.6;
                            if (body.SIZE < 1) body.kill();
                        }
                    }],
                }], 
                AUTOFIRE: true,
                BORDERLESS: true,
                DRAW_FILL: false,
            }
        }
    ]
}
Class.flailBolt1 = {
    PARENT: "genericTankNoBody",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [40, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [48, 56, 0, 0, 360, 1],
        TYPE: "flailBall"
    }],
}
Class.flailBolt2 = {
    PARENT: "genericTankNoBody",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [30, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [20, 36, 0, 0, 360, 1],
        TYPE: "flailBolt1"
    }],
}
Class.flailBolt3 = {
    PARENT: "genericTankNoBody",
    COLOR: "grey",
    GUNS: [{
        POSITION: [30, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [18, 36, 0, 0, 360, 1],
        TYPE: "flailBolt2"
    }],
}

Class.developer.UPGRADES_TIER_0 = ["nav", "spectator", "addons"]
Class.misc.UPGRADES_TIER_0 = []
Class.nav.UPGRADES_TIER_0 = ["tanks"] // makes things easier
    Class.tanks.UPGRADES_TIER_0 = [['basic','Base'], ['whirlwind','Base'], ['literallyAMachineGun','Base']]
