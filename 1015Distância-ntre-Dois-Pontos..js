/*Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia = (x2-x1)²+(y2-y1)² (tudo isso em raiz)*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');


var [x1, y1] = valores[0].split(" ")
var [x2, y2]= valores[1].split(" ")
var distancia =Math.sqrt(Math.pow( (x2-x1),2)+Math.pow((y2-y1),2))

console.log(distancia.toFixed(4))