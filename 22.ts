// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


const games = ["Playstation", "Xbox", "Nintendo"];

// // Attempt to access an out-of-bounds index
// const car = cars[3]; // This will produce an index error

// console.log("car:", car); // This line will never be reached due to the error


const cars = ["Honda", "Kia", "Toyota"];

// Corrected index to access the last element
const car = cars[2]; // Now it accesses the last element

console.log("car:", car); // Outputs: Car: kia