/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(' ')
const pi = 3.14159
var a = parseFloat(entrada.shift());
var b = parseFloat(entrada.shift());
var c = parseFloat(entrada.shift());



console.log('TRIANGULO: ' + ((a*c/2).toFixed(3)));
console.log('CIRCULO: ' + ((pi*(Math.pow(c,2))).toFixed(3)));
console.log('TRAPEZIO: ' + (((a+b)*c/2).toFixed(3)));
console.log('QUADRADO: ' + (b*b).toFixed(3));
console.log('RETANGULO: ' + ((a*b).toFixed(3)));

//área