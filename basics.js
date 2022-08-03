// function Palindrom(input) {
//   let string = input.split("").reverse();
//   return string
// }
// console.log(Palindrom("madam"))

let food = Number(prompt("Total bill?"))
let tipPercent = Number(prompt("Tip % ?") / 100);
let totalTip = food * tipPercent;
console.log(totalTip);