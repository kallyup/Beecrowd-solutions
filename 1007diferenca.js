//Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var a = parseInt(lines.shift())
var b = parseInt(lines.shift())
var c = parseInt(lines.shift())
var d = parseInt(lines.shift())

console.log('DIFERENCA = ' + (a*b-c*d))

//diferança