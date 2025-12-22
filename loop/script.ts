
// // 01. Find number of digits
// // ================================
// let num1: number = 153;
// let count: number = 0;
// let temp1: number = num1;

// while (temp1 > 0) {
//   let digit: number = temp1 % 10;
//   count++;
//   temp1 = (temp1 - digit) / 10;
// }
// console.log("Digits =", count);


// // 02. Sum of first and last digit
// // ================================
// let num2: number = 1578;

// let lastDigit2: number = num2 % 10;
// let temp2: number = num2;

// while (temp2 >= 10) {
//   let digit: number = temp2 % 10;
//   temp2 = (temp2 - digit) / 10;
// }

// let firstDigit2: number = temp2;
// let sum2: number = firstDigit2 + lastDigit2;

// console.log("First =", firstDigit2);
// console.log("Last =", lastDigit2);
// console.log("Sum =", sum2);


// // 03. First and Last digit
// // ================================
// let num3: number = 9876;
// let lastDigit3: number = num3 % 10;
// let temp3: number = num3;

// while (temp3 >= 10) {
//   let digit: number = temp3 % 10;
//   temp3 = (temp3 - digit) / 10;
// }

// console.log("First digit =", temp3);
// console.log("Last digit =", lastDigit3);


// // 04. Reverse a number
// // ================================
// let num4: number = Number(prompt("Enter number to reverse:") || 0);
// let reverse: number = 0;

// while (num4 > 0) {
//   let digit: number = num4 % 10;
//   reverse = reverse * 10 + digit;
//   num4 = (num4 - digit) / 10;
// }

// document.write("Reverse = " + reverse + "<br>");


// // 05. Factorial








// // 06. Fibonacci series
// // ================================
// let n6: number = Number(prompt("Enter Fibonacci terms:") || 0);
// let a6: number = 0;
// let b6: number = 1;

// for (let i = 1; i <= n6; i++) {
//   document.write(a6 + "<br>");
//   let next: number = a6 + b6;
//   a6 = b6;
//   b6 = next;
// }



// // 07. Prime number check
// // ================================
// let num7: number = Number(prompt("Enter number to check prime:") || 0);
// let isPrime: boolean = true;

// if (num7 <= 1) {
//   isPrime = false;
// }

// for (let i = 2; i <= num7 / 2; i++) {
//   if (num7 % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// document.write(
//   num7 + (isPrime ? " is Prime<br>" : " is Not Prime<br>")
// );



// // 08. Prime factors
// // ================================
// let num8: number = Number(prompt("Enter number for prime factors:") || 0);

// document.write("Prime Factors:<br>");
// for (let i = 2; i <= num8; i++) {
//   while (num8 % i === 0) {
//     document.write(i + "<br>");
//     num8 = num8 / i;
//   }
// }



// // 09. Armstrong number
// // ================================
// let num9: number = Number(prompt("Enter Armstrong number:") || 0);
// let sum9: number = 0;
// let temp9: number = num9;

// while (temp9 !== 0) {
//   let digit: number = temp9 % 10;
//   sum9 += digit * digit * digit;
//   temp9 = (temp9 - digit) / 10;
// }

// document.write(
//   sum9 === num9
//     ? num9 + " is Armstrong<br>"
//     : num9 + " is Not Armstrong<br>"
// );
