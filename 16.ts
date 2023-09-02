let guests3=["Faraz","Sibtain","Tariq"];
let whocantmakeit1 = "Faraz";

guests3.forEach((guests4, i) => {
if(guests4===whocantmakeit1){
    guests3[i]="Asad"
    console.log(`Hi ${guests3[i]}, i would like to dinner with you thats why i'm inviting you`)}
else {console.log(`Hi ${guests4},i would like to dinner with you thats why i'm inviting you`)
}
})

console.log("----------------------------------------------------------------------------------");

guests3;
console.log("We just found a bigger table so now more space is available")
guests3.unshift("kamran");
guests3.push("raheel")
guests3.splice(2,0,"Azmat")
console.log(guests3)

export{guests3}