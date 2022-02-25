//Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var a = parseInt(lines.shift())
var b = parseInt(lines.shift())
var c = parseFloat(lines.shift())

console.log('NUMBER = ' + a)
console.log('SALARY = U$ ' + (b*c).toFixed(2))

//salário