
// //01 find two numbers of sum

// let a: number = Number(prompt("Enter first number: "));
// let b: number = Number(prompt("Enter second number: "));

// let sum: number = a + b;
// document.write("The sum of " + a + " and " + b + " is " + sum);


//02-find two number of arithmetic operation
// let a: number = Number(prompt("Enter first number: "));
// let b: number = Number(prompt("Enter second number: "));
        
// let sum: number = a + b;
// let difference: number = a - b;
// let product: number = a * b;
// let quotient: number = a / b;       

// document.write("The sum of " + a + " and " + b + " is " + sum + "<br>");
// document.write("The difference of " + a + " and " + b + " is " + difference + "<br>");
// document.write("The product of " + a + " and " + b + " is " + product + "<br>");
// document.write("The quotient of " + a + " and " + b + " is " + quotient + "<br>");


//03-find perimeter and area of rectangle
// let length: number = Number(prompt("Enter length of rectangle: "));
// let breadth: number = Number(prompt("Enter width of rectangle: "));

// let perimeter: number = 2 * (length + breadth);
// let area: number = length * breadth;

// document.write("The perimeter of rectangle is " + perimeter + "<br>");
// document.write("The area of rectangle is " + area + "<br>"); 


//04 - Find area of rectangle
// let length4: number = Number(prompt("Enter length of rectangle: "));
// let breadth4: number = Number(prompt("Enter width of rectangle: "));

// let area4: number = length4 * breadth4;
// document.write("Area of rectangle = " + area4);


//05 - enter radius of a circle and find its diameter, circumference and area
// let radius: number = Number(prompt("Enter radius of the circle:"));
// const PI: number = 3.14;

// let diameter: number = 2 * radius;
// let circumference: number = 2 * PI * radius;
// let area5: number = PI * radius * radius;

// document.write("Diameter = " + diameter + "<br>");
// document.write("Circumference = " + circumference + "<br>");
// document.write("Area = " + area5);


//06 enter length in centimeter and convert it into meter and kilometer
// let cm: number = Number(prompt("Enter length in centimeters:"));
// let meter: number = cm / 100;
// let kilometer: number = cm / 100000;

// document.write("Length in Meter = " + meter + "<br>");
// document.write("Length in Kilometer = " + kilometer);


//07- enter temperature in Celsius and convert it into Fahrenheit
// let celsius: number = Number(prompt("Enter temperature in Celsius:"));
// let fahrenheit: number = (celsius * 9 / 5) + 32;

// document.write("Temperature in Fahrenheit = " + fahrenheit);


//08 - enter temperature in Fahrenheit and convert to Celsius
// let fahrenheit8: number = Number(prompt("Enter temperature in Fahrenheit:"));
// let celsius8: number = (fahrenheit8 - 32) * 5 / 9;

// document.write("Temperature in Celsius = " + celsius8);


//09 - convert days into years, weeks and days
// let days: number = Number(prompt("Enter total number of days:"));

// let years: number = (days - (days % 365)) / 365;
// let remainingDays: number = days % 365;

// let weeks: number = (remainingDays - (remainingDays % 7)) / 7;
// let finalDays: number = remainingDays % 7;

// document.write("Years = " + years + "<br>");
// document.write("Weeks = " + weeks + "<br>");
// document.write("Days = " + finalDays);


//13 enter two angles of a triangle and find the third angle
// let angle1: number = Number(prompt("Enter first angle:"));
// let angle2: number = Number(prompt("Enter second angle:"));

// let angle3: number = 180 - (angle1 + angle2);
// document.write("Third angle of triangle = " + angle3);


// //17 enter P, T, R and calculate Simple Interest
// let P: number = Number(prompt("Enter Principal (P):"));
// let T: number = Number(prompt("Enter Time (T) in years:"));
// let R: number = Number(prompt("Enter Rate of Interest (R):"));

// let SI: number = (P * T * R) / 100;

// console.log("Principal =", P);
// console.log("Time =", T);
// console.log("Rate =", R);
// console.log("Simple Interest =", SI);
