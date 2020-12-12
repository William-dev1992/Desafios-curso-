//DESAFIO 1
//Escreva uma função que receba dois números e retorne o maior deles.

function returnHigher(x, y){
  return x > y ? x : y
}
//console.log(returnHigher(8, 7));

/////////////////////////////////////////////////////////

//DESAFIO 2
//Escreva uma função que receba um Array com 3 números e imprima eles em ordem
var screen = document.querySelector('#root')

var numbers = [5,1,3];

function organizeNum(arr) {
  return arr.sort();
}
//screen.innerText = organizeNum(numbers);

/////////////////////////////////////////////////////////

//DESAFIO 3
//Escreva uma função que receba um Array com 5 números e retorne o maior deles

var numbs = [5,8,9,1,7];

var max = numbs.reduce((a,b) => {
  return Math.max(a,b)
});

//console.log(max);

/////////////////////////////////////////////////////////

//DESAFIO 4
//Escreva uma função que receba um Array com 5 números e retorne a média deles

function average(arr){
  var sum = arr.reduce((a,b) => {
    return  (a + b)
  })
  var avrg = sum / arr.length
  console.log(avrg);
}
//average(numbs)

///////////////////////////////////////////////////////

//DESAFIO 5
//Escreva uma função que receba um número e imprima se ele é par ou ímpar

function pairOrOdd(x){
  var result = x % 2
  if(result == 0) {
    return "pair"
  } else {
    return "odd"
  }
}
//console.log(pairOrOdd(5));

//////////////////////////////////////////////////////

//DESAFIO 6
//Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4.
//Para cada número que seja múltiplo de 4 imprima "pi" no lugar

function findMult(){ for (let x = 0; x < 101; x++) {
    if (x % 4 == 0) {
      console.log(x);
    } else {
      screen.innerText += x + ', '
    }
  }
}

//findMult()

//////////////////////////////////////////////////////

//DESAFIO 7
//Escreva uma função que receba um objeto e imprima suas propriedades
var obj = {
  nome: 'João',
  idade: "23",
  Estado: "Bahia"
}

function props(object){
  const {nome, idade, Estado} = object
  console.log(nome, idade, Estado);
}

//props(obj)

//////////////////////////////////////////////////////

//DESAFIO 8
//Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.

function createDateObj(x,y,z){
  return date = {
    Month: x,
    Day: y,
    Year: z
  }
}

//console.log(createDateObj(11,13,2003));

//////////////////////////////////////////////////////

//DESAFIO 9
//Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: 
//A maior e menor altura e a média da idade.
function biggerBtw2(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

function smallerBtw2(a, b){
  if (b > a) {
    return a
  } else {
    return b
  }
}

function midle(list){
  var total = 0;
  for (const num of list) {
    total += num
  }
  return total / list.length
}

function resolution(people){
  var heigher = 0;
  var lower = 999;
  var ages = [];
  for (let person of people) {
    heigher = biggerBtw2(heigher, person.height);
    lower = smallerBtw2(lower, person.height);
    ages.push(person.age);
  }
  console.log(heigher);
  console.log(lower);
  console.log(midle(ages));
}

resolution([
  {height:1.8,age:23},
  {height:1.6,age:20},
  {height:1.9,age:23}
])

////////////////////////////////////////////////////

//DESAFIO 10
//Escreva um programa que imprima o seguinte padrão
// *
// * *
// * * *
// * * * *
// * * * * *

function stars(number){
  for (let i = 1; i <= number; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string += "* "
    }
    console.log(string);
  }
}

// stars(5)