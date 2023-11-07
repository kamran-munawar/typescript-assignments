// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

let alien_color:string[]=["green","yellow","red"]

if(alien_color[0]==="green"){
    console.log("Congratulations you earned 5 points")
} else if(alien_color[1]==="yellow"){
    console.log("Congratulations you earned 10 points")
} else if(alien_color[2]==="red"){
    console.log("Congratulations you earned 15 points")
} else{
    console.log("Sorry invalid colors")
}