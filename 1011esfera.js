//Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

//Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.

//resolução 1
var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

const pi = 3.14159
var r = parseFloat(lines.shift())   //retira o valor vendido da pilha
var total = (4/3)*pi*(Math.pow(r,3))        //calcula o total math.pow potência

console.log('VOLUME = ' + (total.toFixed(3)))  //exibe

//resolução 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift());
var pi = 3.14159

console.log('VOLUME = '+ ((4.0/3)*pi*r**3).toFixed(3))