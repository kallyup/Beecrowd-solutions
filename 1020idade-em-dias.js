//Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift())
var ano = parseInt(n/365)
n= n-(ano*365)
var mes= parseInt(n/30)
n= n-(mes*30)
var dias = n
console.log(ano + ' ano(s)')
console.log(mes + ' mes(es)')
console.log(dias + ' dia(s)')

//idade em dias