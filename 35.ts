// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

// • Modify your program to print a statement about each animal, such as A dog would make a great pet.

// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
   
   
let animals:string[]=["Cat","Turtle","Dog"]
for (let i=0; i<animals.length; i++){
    let namesAnimal=animals[i];
    console.log(namesAnimal)
}
animals.forEach(function (animals){
    console.log("A ".concat(animals).toLowerCase(),"would make a great pet")
})

console.log("These are common pets")
console.log(`These animal would make a great pet:- ${animals}`)
