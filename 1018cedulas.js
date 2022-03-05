//Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var ni = parseInt(lines.shift())
var n = ni
var n1= parseInt(n/100)
n= n-(n1*100)
var n2= parseInt(n/50)
n= n-(n2*50)
var n3= parseInt(n/20)
n= n-(n3*20)
var n4= parseInt(n/10)
n= n-(n4*10)
var n5= parseInt(n/5)
n= n-(n5*5)
var n6= parseInt(n/2)
n= n-(n6*2)
var n7= parseInt(n/1)
n= n-(n7*1)

console.log(ni)
console.log(n1 + ' nota(s) de R$ 100,00')
console.log(n2 + ' nota(s) de R$ 50,00')
console.log(n3 + ' nota(s) de R$ 20,00')
console.log(n4 + ' nota(s) de R$ 10,00')
console.log(n5 + ' nota(s) de R$ 5,00')
console.log(n6 + ' nota(s) de R$ 2,00')
console.log(n7 + ' nota(s) de R$ 1,00')

//cédulas