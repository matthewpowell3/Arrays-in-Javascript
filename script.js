// Arrays in Javascript
//          0       1         2
var car = ['Honda', 'Bimma', 'Crown'];

// push add and pop removes
car.push('Go cart');
car.pop();
car.pop();
// car.sort()
// sor it in order with numbers

car.push(20);
// use any data types

car.push('Tesla');
//replacing crown with tesla
// it removes go cart

// var vegetables = new Array('Carrrot', 'Green beans', 'Pepper');
for (var i = 0; i < car.length; i++) {
  // car.length
  // it is the length of the array
  // you don;t have to constantly update length of the array with array length

  document.write('<h1>' + car[i] + '</h1>');
  // for loop will go from one to three
}
// index zero
// too select one out of the rest you must first know the index which starts from zero so honda is zero bimma is one

/*
var car1 = 'Honda';
var car2 = 'Bimma';
var car3 = 'Crown';

document.write('<h1>' + car1 + '</h1>');
document.write('<h1>' + car2 + '</h1>');
document.write('<h1>' + car3 + '</h1>');
 */
