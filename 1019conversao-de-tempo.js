//Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

var n = parseInt(lines.shift())

let h = parseInt(n/3600); //hora=1 
n = n%3600; //n=65 pega o resto e divide

let m = parseInt (n/60); //minutos=1
n=n%60; //n=5

let s = n;

console.log(h+':'+ m + ':' + s)