"use strict";
// 1 ===============================

const result = 5 + 5 + "5";
console.log(result + " Тип : " + typeof result);

// 2 ===============================

const email = "artemcherkashin123@gmail.com";
console.log(
  "Чи є @ у імейлі : " + email.includes("@"),
  " Кількість символів : " + email.length
);

// 3 ===============================

const first = "My";
const second = "Name";
const third = "Is";
let fullName = first + second + third;
fullName = fullName + "Victor";
console.log(fullName);
// 4 ===============================

let buyerName = "Олександро";
let payment = 300;
alert("Дякуємо, " + buyerName + "! " + "До сплати " + payment + " гривень");
