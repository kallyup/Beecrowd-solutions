//A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

//Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var pi = 3.14159
var r = parseFloat(lines.shift())
r = r.toFixed(2)

console.log('A=' + (pi*(Math.pow(r,2))).toFixed(4))

//área do círculo