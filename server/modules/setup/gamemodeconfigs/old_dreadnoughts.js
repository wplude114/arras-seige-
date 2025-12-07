module.exports = {
    MODE: "tdm",
    TEAMS: 4,
    ROOM_SETUP: ['map_old_dreadnoughts'],
    MAZE: 31,
    TILE_WIDTH: 600,
    TILE_HEIGHT: 600,
    PORTAL_SPAWNS: true,
    MAX_UPGRADE_TIER: 13,
    SPAWN_CONFINEMENT: {xMin: 18000},
    FOOD_TYPES: [
        [9999, [ // set to other old shapes
            [1024, 'egg'],
            [256, 'square'],
            [64, 'triangle'],
            [16, 'pentagon'], [4, 'GBetaPentagon'], [1, 'GAlphaPentagon'], //[0.25, 'omegaPentagon']
        ]],
    ],
    FOOD_TYPES_NEST: [ // set spawns to old shapes
        [100000, [
            [16, 'pentagon'], [4, 'GBetaPentagon'], [1, 'GAlphaPentagon'], //[0.25, 'omegaPentagon']
        ]],
        [99999.25, [
            [16, 'GSeptagon'], [4, 'GHexagon'], [ 1, 'GOctagon'], [ 0.25, 'GNonagon']
        ]],
    ],
    BOSS_TYPES: [],
};
