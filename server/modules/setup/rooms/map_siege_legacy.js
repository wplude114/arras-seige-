let { bossSpawn:   b , atmg:  A , outside:   o } = require('../tiles/siege.js'),
    { wall: WALL, normal:   _ } = require('../tiles/misc.js'),
	{ base1:   s } = require('../tiles/tdm.js'),

room = [
    [  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ],
    [  o ,  A ,  o ,  o ,  o ,  o ,  o ,  o ,  A ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  A ,  o ],
    [  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  s ,  _ ,  _ ,WALL,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  A ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  A ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  s ,  _ ,  _ ,WALL,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  o ,  o ,  o ],
    [  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ],
    [  o ,  A ,  o ,  o ,  o ,  o ,  o ,  o ,  A ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  A ,  o ],
    [  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ,  o ],
];

module.exports = room;
