// Zadanie 1
const firstpart = 'Hello';
const secondpart = 'World!';
const sayHello = (`${firstpart} ${secondpart}`);
console.log(sayHello);

//Zadanie 2
const multiply = (a, b = 1) => (a*b);
console.log(multiply(2));

//Zadanie 3
const values = [5,7,4,8,3,9,6,7,3,12,4,6,9];
const average = values.reduce((a, b) => a + b, 0)/values.length;
console.log(average);

//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const total = [...values, ...grades];
const average2 = total.reduce((a, b) => a + b, 0)/total.length;
console.log(average2);

//Zadanie 5
const tab = [1, 4, 'Iwona', false, 'Nowak'];
const [, , first, ,last ] = tab;
console.log(first, last);