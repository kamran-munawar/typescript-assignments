// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

function q31(){
let usernames:string[]=["Azeem","kamran","baloch","raju"]
let removeUsers=usernames.slice(4)
console.log(`successfully remove all the users from array ${removeUsers}`) //Result emprty array

if(removeUsers.length===0){
    console.log("we need to find some users")
}

}
q31();