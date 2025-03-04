// Chapter 31-34
// Date Method

// Qno:1 Write a program that displays current date and time in
// your browser.
//ans;
// let date = new Date();
// document.write(date);

// Qno:2 Write a program that alerts the current month in words.
// For example December.
//ans;
// let date = new Date();
// let month = date.getMonth();

// let Months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
// alert("Current month : " + Months[month]);

// Qno:3 Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
//ans;
// let date = new Date();
// let Day = date.getDay();

// let Days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
// alert("Today is " + Days[Day]);

// Qno: 4 Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
//ans;
// let Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// if (Days === "Saturday" || Days === "Sunday"){
//     document.write("It's Fun day");
// }

// else{
//     document.write("Today is not fun day");
// }

// Qno:5 Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
//ans;
// let date = new Date();
// let today = date.getDate();

// if(today<16){
//     document.write("First fifteen days of the month");
// }

// else{
//  document.write("Last days of the month");
// }

// Qno:6 Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object
//ans;
// let dateNow = new Date();
// let milliSecond = dateNow.getTime();
// document.write("Current date: " + dateNow + "<br />");
// document.write("Elapsed Milliseconds since January 1, 1970 " + milliSecond + "<br />");
// document.write("Elapsed minutes January 1, 1970 " + (milliSecond / 999 * 60));

// Qno:7 Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
//ans;
// let date = new Date();
// let time = date.getHours();
// if (time < 13){
//     document.write("It's AM");
// }

// else{
//     document.write("It's PM");
// }

// Qno:8 Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
//ans;
// let laterDate = new Date("31 december 2020");
// document.write(laterDate);

// Qno:9 Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
//ans;
// let today = new Date();
// let todayMilliSec = today.getTime();
// let lastRamadan = new Date("18 june 2015");
// let lastRamadamMilliSec = lastRamadan.getTime();
// let difference = todayMilliSec-lastRamadamMilliSec;
// let days = Math.round(difference/(1000*  60* 60* 24));
// document.write(days + " days have passed since 1st ramadan, 2015");

// Qno:10 Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
//ans;
// let today = new Date();
// let todayMilliSec = today.getTime();
// let year2015 = new Date("1 january 2015");
// let year2015MilliSec = year2015.getTime();
// let difference = todayMilliSec - year2015MilliSec;
// let seconds = Math.round(difference/(1000));
// document.write("On refference date " + today + "<br />");
// document.write(seconds + " seconds had passed since beginning of 2015");

// Qno:11 Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
//ans;
// let today = new Date();
// let time= today.getHours();
// time = time -1 
// document.write("Current date: " + today + "<br />");
// today . setHours(time);
// document.write("1 hour ago, it was " + today);

// Qno:12 Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
//ans;
// let today = new Date();
// let yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo - 100
// document.write("Current date: " + today + "<br />");
// today .setFullYear(yearsAgo)
// document.write("100 years back, it was " + today);

// Qno:13 Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
//ans;
// let age = +prompt("enter your age");
// let today = new Date();
// let yearNow = today.getFullYear();
// let birthYear = yearNow - age
// document.write("Your age is " + age + "<br />" + "Your Birth year is " + birthYear);

// Qno:14 Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
//ans;
// Part :a
// let customerName = "Inshah Jamal";
// let today = new Date(); 
// // Part :b
// let months = today.getUTCMonth();
// let mList = ["January", "Feburay", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// // Part :c
// let unitNo = 410
// // Part :d
// let unitCharges = 16
// // Part : e 
// let netAmount = unitNo * unitCharges;
// // Part : f
// let extraCharge = 350;
// // Part : g
// let latePayment = netAmount + extraCharge;

// document.write("<h1> K-ELECTRIC BILL </h1> <br/>")
// document.write("Customer Name: " + customerName + "." + "<br />");
// document.write("Month: " + mList[2] + "." + "<br />");
// document.write("Numbers of Units: " + unitNo + "." + "<br />");
// document.write("Charges per Unit: " + unitCharges + "." + "<br />");
// document.write("<br />");
// document.write("Net Amount Payment (With in Due Date): " + netAmount + "." + "<br />");
// document.write("Late Payment Surcharge: " + extraCharge + "." + "<br />");
// document.write("Gross Amount Payment (After Due Date): " + latePayment + "." + "<br />");