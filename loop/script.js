//01 find number of digit in a num.
// let num=153;
// let count=0;

// while(num>0){
//     let digit = num%10;
//     count++
//     num=(num-digit)/10;

// }
// console.log(count)




//02 find sum of frist and last digit of a number

// let number = 1578;        
// let lastDigit = num % 10;  

// let a = num;       

// while (a >= 10) {
//     let digit = a% 10;     // current last digit
//     a = (a - digit) / 10; // remove last digit
// }

// let firstDigit = a;        
// let sum = firstDigit + lastDigit;

// console.log("First digit =", firstDigit);
// console.log("Last digit =", lastDigit);
// console.log("Sum =", sum);



//03 find number first and last digit

// let num = 1578;        

// let lastDigit = num % 10;
// let a = num;     

// while (a >= 10) {
//   let digit = a % 10;
//   a = (a - digit) / 10;
// }

// console.log("First digit =", a);
// console.log("Last digit =", lastDigit);


//04 find a reverse of a number 

// let num2 = number (prompt("Enter a number: "));

// let revers = 0;
// while (num > 0){
//     let digit = num2 % 10;
//     revers = reverse * 10 + digit;
//     num2 = (num2-digit)/10;
// }

// document.write ("reverse of the number: " + reverse);

//5 factorial number






//06-fibonacci series 

// let n = number (prompt("enter the num of terms: "));
// let a=0; b=1 ;
// for (let i=1;i<=n;i++){
//     document.write(a + "<br>");
//     let nextTerm = a + b;
//     a=b;
//     b= nextTerm;
// }


//07-prime number

// let num4 = Number(prompt("enter the number: "));
// flag=true;

// if (num4 == 0 || num4 == 1 ) {
//     document.write (num4 + "is not a prime number");

// }

// for (let i=2; i<=num4 / 2; i++) {
//     while(num4 % i==0){
//         flag=false;
//         break;
//     }
// }

// if (flag==true){
//     document.write(num4 + "is a prime number");

// } else {
//     document.write (num4 + "is not a prime number")
// }


//08-prime-fact

// let num8 = Number (prompt("enter a number: "));

// for (let i=2; i<=num8 ; i++) {
//     while (num8 % i==0) {
//         document.write(i+"<br>");
//         num8=num8/i;
//     }
// }

//09-Armstrong_number

// let num9 = Number(prompt("Enter a number to check Armstrong:"));
// let sum9 = 0;
// let a9 = num9;

// while (a9 != 0) {
//   let digit = a9 % 10;
//   sum9 = sum9 + (digit * digit * digit);
//   a9 = (a9 - digit) / 10;
// }

// if (sum9 === num9) {
//   document.write(num9 + " is Armstrong");
// } else {
//   document.write(num9 + " is Not Armstrong");
// }
