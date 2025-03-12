// Chapter no 35-38
// ----Functins----

// Qno:1  Write a function that displays current date & time in your 
// browser. 
//ans;
// let date = new Date();
// document.write(date);

// Qno:2 Write a function that takes first & last name and then it 
// greets the user using his full name.
//ans;
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");

// function greet(){
//     let fullName = firstName + lastName
//     alert("hello " + fullName)

// }
// greet();

// Qno:3 Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers. 
//ans;
// let firstNum = +prompt("Enter the first number");
// let secondNum = +prompt("Enter the second number");

// function sum(){
//     let result = firstNum + secondNum
//     alert(result);
// }
// sum();

// Qno:4 Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.
//ans;
// let firstNum = +prompt("Enter the first number");
// let operator = prompt("Enter the operator");
// let secondNum = +prompt("Enter the second number");

// function calculator(firstNum , operator , secondNum){
//     if(operator == "+"){
//         let result = firstNum + secondNum
//         alert(result);
//     }

//     else if(operator == "-"){
//         let result = firstNum - secondNum
//         alert(result);
//     }

//     else if(operator == "*"){
//         let result = firstNum * secondNum
//         alert(result);
//     }

//     else if(operator == "/"){
//         let result = firstNum / secondNum
//         alert(result)
//     }

//     else{
//         alert("Invalid operator");
//     }
// }

// calculator(firstNum, operator, secondNum);

// Qno:5 Write a function that squares its argument. 
//ans;
// function square(num){
//     let square = num**2
//     alert(square);
// }

// let userInput = +prompt("Enter the number");
// square(userInput);

// Qno:6 Write a function that computes factorial of a number.
//ans;

// function factorial() {

//     let number = +prompt("Enter a number");
//     let fact = 1;
//     if (number === 1 || number === 0) {
//     }
//     else {
//         for (let i = number; i >= 1; i--){
//             fact = fact * i
//         }
// }
// document.write(fact);
// }
// factorial();

// Qno: 7 Write a function that take start and end number as inputs
// & display counting in your browser.
//ans;
// function counting(start, end){
//     for(let i = start; i<= end; i++){
//         document.write(i + "<br />");
//     }
// }

// let start = +prompt("Enter start number for counting");
// let end = +prompt("Enter end number for counting");
// counting(start, end);

// Qno:8 Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
//ans;
// let userInput1 = +prompt("Enter base of right angle triangle");
// let userInput2 = +prompt("Enter perpendicular of right angle triangle");
// function calculatingHypotnuse(base, perpendicular){
//       function calculatingSquare(number){
//         return number * number
//       }
// let baseSquare = calculatingSquare(base);
// let perpendicularSquare = calculatingSquare(perpendicular);
// return baseSquare + perpendicularSquare
// }

// let hypotenuse = calculatingHypotnuse(userInput1, userInput2);
// document.write(hypotenuse);

// Qno:9 Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
//ans;
// function calculateArea(width, height){
//      let A = width * height ;
//      return A;
// }

// let width = +prompt("Enter the width of triangle");
// let height = +prompt("Enter the height of triangle");
// let result = calculateArea(width, height);
// document.write(result);

// Qno:10 Write a JavaScript function that checks whether a passed
// string is palindrome or not?

// let str = prompt("Write a word to check whether it's a palindrome or not").toLoweCase();
// function palindromeChecker(word){
//     // let splittedWord = word.split("");
//     // let reversedWord = splittedWord.reverse();
//     // let result =  reversedWord.join("");

// if(result == word){
//     document.write(word + " is a palindrome word");
// }

// else{
//     document.write(word + " is not a palindrome word");
// }
// }
// palindromeChecker(str);

// Qno:11 Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
//ans;
// let userInput = prompt("Enter a word to be capatilized");
// let answer = [];

// function titleCase(word) {
//     let spliting = word.split(" ");
//     for (let i = 0; i < spliting.length; i++) {
//         answer.push(spliting[i][0].toUpperCase() + spliting[i].slice(1).toLowerCase())
//     }
// }
// titleCase(userInput);
// document.write(answer.join(" "));

// Qno:12 Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
//ans;
// function string(statement) {
//     let spliting = statement.split(" ");
//     let sample = spliting[0].length;
//     for(let i = 0; i < spliting.length; i++){
//         if(sample < spliting[i].length){
//             sample = spliting[i]
//         }
//     }
//     return sample;
// }
//  let userInput = prompt("Enter a line to get it's longest word");
// let result = string(userInput);
// document.write("Give Input: " + userInput + "<br />" + "Expected Output: " + result);

// Question 13 Write a JavaScript function that accepts two arguments, a string and a letter and the function 
// will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' .
// answer:
// function repeat(string, letter) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == letter) {
//             count++;
//         }
//     }
//     return count;
// }
// let string = "JSResourceS.com";
// let letter = "o";
// let result = repeat(string, letter);
// document.write("the number of occurences of letter " + letter + " is " + result)

// Question 14 Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// answer:
// function calcCircumference(radius){
//     let circumference = 2*3.142*radius;
//     return circumference;
// }
// function calcArea(radius){
//     let area = 3.142*(radius*radius)
//     return area;
// }
// let radius = +prompt("enter radius of a circle to calculate its circumference and area")
// let area = calcArea(radius);
// let circumference = calcCircumference(radius);
// document.write("The circumference of a circle is: " + circumference + "<br />" + "The area of a circle is: " + area)
