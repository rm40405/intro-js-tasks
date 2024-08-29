
// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04


var mathMarks = parseFloat(75.25);
var boiMarks = parseFloat(65.00);
var cheMarks = parseFloat(80.00);
var phyMarks = parseFloat(35.45);
var banMarks = parseFloat(99.50);
var totalMarks = (mathMarks + boiMarks + cheMarks + phyMarks + banMarks );
var absMarks = totalMarks/5;
console.log( absMarks.toFixed(2));