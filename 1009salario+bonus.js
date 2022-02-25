//Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var nome = lines.shift()                           //retira o nome da pilha
var salary = parseFloat(lines.shift())  //retira o salario fixo da pilha
var bonus = parseFloat(lines.shift())   //retira o valor vendido da pilha
var total = salary+(bonus*0.15)         //calcula o total

console.log('TOTAL = R$ ' + (total.toFixed(2)))  //exibe

//salário com bônus