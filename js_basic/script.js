// //01 find two numbers of sum

// let a = Number(prompt("Enter first number: "));
// let b = Number(prompt("Enter second number: "));

// let sum = a + b;
// document.write("The sum of " + a + " and " + b + " is " + sum);

//02-find two number of arithmetic operation
// let a = Number(prompt("Enter first number: "));
// let b = Number(prompt("Enter second number: "));
        
// let sum = a + b;
// let difference = a - b;
// let product = a * b;
// let quotient = a / b;       

// document.write("The sum of " + a + " and " + b + " is " + sum + "<br>");
// document.write("The difference of " + a + " and " + b + " is " + difference + "<br>");
// document.write("The product of " + a + " and " + b + " is " + product + "<br>");
// document.write("The quotient of " + a + " and " + b + " is " + quotient + "<br>");

//03-find perimeter and area of rectangle
// let length = Number(prompt("Enter length of rectangle: "));
// let breadth = Number(prompt("Enter width of rectangle: "));

// let perimeter = 2 * (length + breadth);
// let area = length * breadth;
// document.write("The perimeter of rectangle is " + perimeter + "<br>");
// document.write("The area of rectangle is " + area + "<br>"); 

// // 04 - Find area of rectangle
// let length4 = Number(prompt("Enter length of rectangle: "));
// let breadth4 = Number(prompt("Enter width of rectangle: "));

// let area4 = length4 * breadth4;

// document.write("Area of rectangle = " + area4);

//05 - enter radius of a circle and find its diameter, circumference and area.

// let radius = Number(prompt("Enter radius of the circle:"));
// const PI = 3.14;
// let diameter = 2 * radius;
// let circumference = 2 * PI * radius;
// let area5 = PI * radius * radius;

// document.write("Diameter = " + diameter + "<br>");
// document.write("Circumference = " + circumference + "<br>");
// document.write("Area = " + area5);

//06 enter length in centimeter and convert it into meter and kilometer.
// let cm = Number(prompt("Enter length in centimeters:"));
// let meter = cm / 100;
// let kilometer = cm / 100000;

// document.write("Length in Meter = " + meter + "<br>");
// document.write("Length in Kilometer = " + kilometer);


// let cm = Number(prompt("Enter length in centimeters:"));
// let meter = cm / 100;
// let kilometer = cm / 100000;

// document.write("Length in Meter = " + meter + "<br>");
// document.write("Length in Kilometer = " + kilometer);


//07- enter temperature in Celsius and convert it into Fahrenheit.
// let celsius = Number(prompt("Enter temperature in Celsius:"));
// let fahrenheit = (celsius * 9 / 5) + 32;

// document.write("Temperature in Fahrenheit = " + fahrenheit);


//08 -  enter temperature in Fahrenheit and convert to Celsius

// let fahrenheit8 = Number(prompt("Enter temperature in Fahrenheit:"));
// let celsius8 = (fahrenheit8 - 32) * 5 / 9;


// document.write("Temperature in Celsius = " + celsius8);


//09 - convert days into years, weeks and days

// let days = Number(prompt("Enter total number of days:"));


// let years = (days - (days % 365)) / 365;
// let remainingDays = days % 365;


// let weeks = (remainingDays - (remainingDays % 7)) / 7;
// let finalDays = remainingDays % 7;

// document.write("Years = " + years + "<br>");
// document.write("Weeks = " + weeks + "<br>");
// document.write("Days = " + finalDays);



//13 enter two angles of a triangle and find the third angle.
// let angle1 = Number(prompt("Enter first angle:"));
// let angle2 = Number(prompt("Enter second angle:"));


// let angle3 = 180 - (angle1 + angle2);


// document.write("Third angle of triangle = " + angle3);

//17 enter P, T, R and calculate Simple Interest.
// let P = Number(prompt("Enter Principal (P):"));
// let T = Number(prompt("Enter Time (T) in years:"));
// let R = Number(prompt("Enter Rate of Interest (R):"));

// let SI = (P * T * R) / 100;

// console.log("Principal =", P);
// console.log("Time =", T);
// console.log("Rate =", R);
// console.log("Simple Interest =", SI);
