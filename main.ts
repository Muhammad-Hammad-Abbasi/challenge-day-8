
// Day 8: TypeScript Modules (Export and Import)

// #### Question 1: Exporting and Importing Multiple Functions

// *Question:*
// Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle given its width and height) and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). In the second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.

// *Hint:*
// - Use export to export the functions in the first file.
// - Use named imports to bring the functions into the second file.
// - Ensure that the file paths are correctly specified when importing.

import { calculateArea } from "./first"; 

import { calculatePerimeter } from "./first";

const width = 5;
const heigth = 10;

const result1 = calculateArea(heigth, width);
const result2 = calculatePerimeter(heigth, width);

console.log(`Area: ${result1}.`); // Output: 50
console.log(`Perimeter: ${result2}.`); // 0utput: 30


import circle from "./class-file";

const results = new circle("Hammad","korangi")
console.log(`Name: ${results.name}`);
console.log(`Area: ${results.area}`);
















