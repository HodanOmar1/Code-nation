// // activity 1
// let name="Hodan";
// let age= 0;
// let colour="black";
// console.log (`My name is ${name}, Age is ${0}, favourite colour is ${colour}`);

// // activity 2
// let breakfast= "Cereal";
// let lunch="Sandwich";
// let dinner="Fish and Chips";
// // console.log (`My Breakfast is ${breakfast}, Lunch is ${lunch}, and Dinner is ${dinner}`);
// console.log (`My Breakfast tomorrow will be  ${breakfast}, Lunch will be ${lunch}, and Dinner will be ${dinner}`);

// // activity 3
// let i= "06/12/1997"
// today= "02/06/2021"
// console.log(`My Birthday is ${i}, Today's date is ${today}`);


// // activity 4
// let space1="x";
// let space2="o";
// let space3=" ";
// let space4="x";
// let space5="x";
// let space6=" ";
// let space7="o";
// let space8=" ";
// let space9=" ";
// console.log(`    |    |    `);
// console.log(`${space1}   | ${space2}  |  ${space3}  `);
// console.log(`    |    |    `);
// console.log(`--------------`);
// console.log(`    |    |    `);
// console.log(`${space4}   | ${space5}  |   ${space6} `);
// console.log(`    |    |    `);
// console.log(`--------------`);
// console.log(`    |    |    `);
// console.log(` ${space7}  | ${space8}  |   ${space9}`);
// console.log(`    |    |    `);


// // activity 5
// var a=20
// var b=30
// console.log (a+b);
// console.log (a/=b);
// console.log (a-=b);




// let music = "no music";

// if (music == "EDM") {
// console.log("awesome");
// }
// else if (music == "no music") {
// console.log("boring");
// }
// else {
// console.log("chart music sucks");
// }

// if (1500% 1234){
// console.log("true");
// }else{ 
// console.log("false");
// }

// if(1!="1"){
// console.log(true);
// }
// else{
// console.log(false);
// }
// let place = "Manc";
// let weather = "Cloudy";
// if (place == "Manc" && weather == "Sunny") {
// console.log("Check again");
// }
// else if (place == "Manc" && weather == "Rain") {
// console.log("Obvs");
// }
// else {
// console.log("What it isn't raining?");
// }

// let car = "Peugeot";
// if(car == "Ford" || car == "GM"){
// console.log("You've got an American car!");
// }
// else if(car == "Peugeot" || car == "Citroen"){
// console.log("You've got a French boy!");
// }
// else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
// console.log("Japanese cars are dead quiet!");
// }
// else if(car == "Mercedes"){
// console.log("You are proper posh German!");
// }
// else if(car == "Volkswagen"){
// console.log("German aren't that bad at all!");
// }
// else if(car == "Hyundai" || car == "Kia"){
// console.log("South Korean cars are getting popular!");
// }
// else{
// console.log("Your car is not in the top ten companies in the world!"); 
// }
// const grade= 87;
// switch(true) {
// case grade>=70:
// console.log("Distinction");
// break;
// case grade >=60:
// console.log("Merit");
// break;
// case grade>=50:
// console.log("Pass");
// break;
// default:
// console.log("Failed");
// }


// let age = 18;
// if (age >= 18){
// console.log("Heres a beer");
// } else {
// console.log("Enjoy your J20");
// }


// let age = 18;
// let country = "UK";

// if (age >= 18 && country == "UK"){
// console.log("Here's a beer my British friend!");
// } else if (age >= 21 && country == "USA") {
// console.log("Here's a beer my American friend!");
// } else {
// console.log("Here's a J20...")
// }

let topping = "chicken";

switch (topping) {
case "cheese":
case "onion":
case "quorn":
console.log("These are important ingredients for my pizza");
break;
case "chicken":
console.log(`I like having ${topping} on pizza.`);
break;
case "pineapple":
console.log(`${topping} should not be on a pizza.”`);
break;
default:
console.log("It is not food!");
}

// challenge 1
// let password = "H1O2D3A4N";

// if (password.length < 8) {
// console.log ("Your password is too short.");
// }
// else {
// console.log(`You password is ${password}.`);
// }

// num=14;
// if(num %3 == 0 || num %5 == 0) {
// ("This number is divisible by 3 or 5");
// }
// else {
// console.log ( "This number is not divisble by 3 or 5");
// }

// let num= 12;

// if (num %3==0 && num %5==0) ; {
// console.log ("Fizz Buzz"); }
// if (num %3 ==0) {
//     console.log ("Fizz"); }
// if (num %5 ==0); {
//     console.log ("Buzz") ;}

// else { 
// console.log ("$num");
// }

//  let num = 10
// if (num % 3 == 0 && num % 5 == 0) {
// console.log("fizz buzz")
// }
// else if (num % 3 == 0) {
// console.log("fizz")
// }
// else if (num % 5 == 0) {
// console.log("buzz")
// }
// else {
// console.log(`${num}`);
// }
let= ("townofHome")
let=("placeofWork")
array1 = ["h","o", "l", "l", "o", "h","e", "l", "l", "o", "o","e", "l", "l", "o"];
array2 = ["h","e", "l", "l", "o", "e","e", "l", "l", "o", "h","e", "l", "l", "o"];

let loopNum = array1.length;

for (let i = 0; i < loopNum; i++){
if (array1[i] == array2[i]){
console.log("It's a match!");
} else {
console.log("It's not a match!");
}


let time = 8;
let placeOfWork = "im at work";
let townOfHome = "im at home";
switch(time) {
    case 9:
        console.log(`${placeOfWork}`);
        break;
    case 7:
         console.log(`${townOfHome}`);
         break;
    default:
        console.log("im commuting");
}

let weird = 11;
// the & 1 was an incomplete statement, but also, even after changing seemingly plays no part in the calculation anyway ? ----
if (weird & 1 == 1) {
     console.log("It's odd");
} else {
     console.log("It's even");
}
