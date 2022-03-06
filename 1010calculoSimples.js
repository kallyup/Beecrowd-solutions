//Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var linha1 = input.split('\n');
//linha1= [12 1 5.3]


var separarLinha1 = linha1.shift().split(' ');
//separarLinha1=[12,1,5.3]
var separarLinha2 = linha1.shift().split(' ');
//separarLinha2=[16,2,5.1]

var co1 = (separarLinha1.shift())
//co1='12'
//separarLinha1=[1,5.3]

var n1= parseFloat(separarLinha1.shift())
//n1='1'
//separarLinha1=[5.3]

var va1 = parseFloat(separarLinha1.shift()).toFixed(2)
//va1='5.3'
//separarLinha1=[NaN]

var co2  = (separarLinha2.shift())
var n2 = parseFloat(separarLinha2.shift())
var va2 = parseFloat(separarLinha2.shift()).toFixed(2)

let mult1=parseFloat(n1*va1)
let mult2=parseFloat(n2*va2)

let total =( mult1+mult2)
console.log('VALOR A PAGAR: R$ ' + (total).toFixed(2))

//calculo simples nd simples

