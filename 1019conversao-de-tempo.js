//Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var n = parseInt(lines.shift())

let h = parseInt(n/3600); //hora=1 
n = n%3600; //n=65 pega o resto e divide

let m = parseInt (n/60); //minutos=1
n=n%60; //n=5

let s = n;

console.log(h+':'+ m + ':' + s)

/* solução 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var n = parseInt(lines.shift())
let hora=0;
let minuto=0;
let segundos=0;

hora=parseInt(n/3600);
n=n-(hora*3600);
minuto=parseInt(n/60);
n=n-(minuto*60);
segundos=n;


console.log(hora +':'+minuto+':'+segundos )*/

//conversão horas minutos segudos