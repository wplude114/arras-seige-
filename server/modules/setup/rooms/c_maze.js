let { rock, roid } = require('../tiles/decoration.js'),
    { normal: ____, nest, wall } = require('../tiles/misc.js'),

room = [
    [wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall],
    [wall,____,wall,____,____,____,____,wall,____,____,____,____,____,wall,wall],
    [wall,____,wall,wall,____,wall,____,____,____,wall,wall,wall,____,____,wall],
    [wall,____,____,____,____,wall,____,wall,____,wall,____,wall,wall,wall,wall],
    [wall,wall,wall,____,____,wall,____,____,____,____,____,____,wall,____,wall],
    [wall,____,____,____,wall,wall,wall,wall,wall,nest,____,____,wall,____,wall],
    [wall,wall,wall,____,____,wall,nest,nest,wall,nest,____,____,____,____,wall],
    [wall,wall,____,____,____,wall,nest,nest,nest,nest,____,____,wall,wall,wall],
    [wall,____,____,wall,____,nest,nest,nest,wall,nest,____,____,____,____,wall],
    [wall,wall,wall,wall,____,nest,nest,nest,wall,wall,wall,____,____,____,wall],
    [wall,____,wall,____,____,____,____,wall,wall,____,wall,wall,wall,____,wall],
    [wall,____,wall,____,wall,____,____,____,____,____,____,____,wall,____,wall],
    [wall,____,____,____,wall,wall,wall,____,wall,____,wall,____,wall,____,wall],
    [wall,wall,wall,wall,wall,____,____,____,____,____,____,____,____,____,wall],
    [wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall]
];

module.exports = room;
