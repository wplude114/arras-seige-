let { rock, roid } = require('../tiles/decoration.js'),
    { normal: _, nest: N } = require('../tiles/misc.js'),

room = [
    [_,_,_,_,_,_,],
    [_,_,_,_,_,_,],
    [_,_,N,N,_,_,],
    [_,_,N,N,_,_,],
    [_,_,_,_,_,_,],
    [_,_,_,_,_,_,],
];

module.exports = room;
