'use strict';

// Zadanie 1
var firstpart = 'Hello';
var secondpart = 'World!';
var sayHello = firstpart + ' ' + secondpart;
console.log(sayHello);

//Zadanie 2
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(2));

//Zadanie 3
var values = [5, 7, 4, 8, 3, 9, 6, 7, 3, 12, 4, 6, 9];
var average = values.reduce(function (a, b) {
  return a + b;
}, 0) / values.length;
console.log(average);

//Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var total = [].concat(values, grades);
var average2 = total.reduce(function (a, b) {
  return a + b;
}, 0) / total.length;
console.log(average2);

//Zadanie 5
var tab = [1, 4, 'Iwona', false, 'Nowak'];
var first = tab[2],
    last = tab[4];

console.log(first, last);
