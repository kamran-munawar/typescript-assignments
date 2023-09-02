let guests3=["Faraz","Sibtain","Tariq"];
let whocantmakeit1 = "Faraz";

guests3.forEach((guests4, i) => {
if(guests4===whocantmakeit1){
    guests3[i]="Asad"
   // console.log(`Hi ${guests3[i]}, i would like to dinner with you thats why i'm inviting you`)}
//else {console.log(`Hi ${guests4},i would like to dinner with you thats why i'm inviting you`)
}
})

guests3;
//console.log("We just found a bigger table so now more space is available")
guests3.unshift("kamran");
guests3.push("raheel")
guests3.splice(2,0,"Azmat")
//console.log(guests3)

console.log("We select only 2 guest for dinner")
let removeguests=guests3
for (let i=removeguests.length;i>2;i--){
    console.log(`sorry ${guests3[i-1]},your invitation is cancelled`)
    guests3.pop();
    console.log(guests3)
    console.log(guests3.length)
    // guests.pop()
    // guests.pop()
    // console.log(`${guests3} list is empty`)

console.log(guests3)
};

console.log(`You are still invited ${guests3.pop()}`)
console.log(`You are still invited ${guests3.pop()}`);
console.log(guests3.length)

