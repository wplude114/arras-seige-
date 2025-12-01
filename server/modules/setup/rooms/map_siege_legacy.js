let { bossSpawn:   b , atmg:  A , outside:   o } = require('../tiles/siege.js'),
    { wall: WALL, normal:   _ } = require('../tiles/misc.js'),
	{ base1:   s } = require('../tiles/tdm.js'),

room = [
    [  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ],
    [  o ,  A ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  A ,  o ],
    [  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ],
    [  o ,  o ,  o ,  o ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  o ,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,WALL,  _ ,  s ,  _ ,  s ,  _ ,  s ,  _ ,  s ,  _ ,WALL,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,WALL,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,WALL,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,  o ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  o ,  o ,  o ,  o ],
    [  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ],
    [  o ,  A ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  A ,  o ],
    [  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ],
];

module.exports = room;
