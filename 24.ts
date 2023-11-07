// More Conditional Tests: You don’t have to limit the
// number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False 
//result for each of the following:

export default function q24(){

let fruit:string = "apple"
let fruit1:string = "banana"
console.log("1.",fruit===fruit1) //false
console.log("2.",fruit!==fruit1) //true

// Tests using the lower case function:

let message:string = "Hello World"
console.log("3.",message.toLowerCase() ==="hello world") //true

// Numerical tests:
let x:number = 5
let y:number = 6
console.log("4.",x==y) //false
console.log("5.",x>y) //false
console.log("6.",x<y)//true
console.log("7.",x>4)//true
console.log("8.",x<10)//true


console.log("9.",x!=y) //true

// Tests using "and" and "or" operators:

let isCar:boolean=true
let isBike:boolean=false

console.log("10.",isCar && isBike) //false
console.log("11.",isCar || isBike) //true

// Test whether an item is in an array:
let fruits:string[]=["apple","banana","cherry"]
console.log("12.",fruits.includes("banana")) //true
console.log("13.",fruits.includes("grapes")) //false

}
q24();