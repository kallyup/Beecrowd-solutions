//Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



//Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(' ');

var a = parseInt(entrada.shift());
var b =parseInt(entrada.shift());
var c =parseInt(entrada.shift());

maior = Math.max(a,b,c) //Math.max acha o valor máximo

console.log(maior + ' eh o maior')

//o maior