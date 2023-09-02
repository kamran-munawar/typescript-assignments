let guests1=["Faraz","Sibtain","Tariq"];
let whocantmakeit = "Faraz";

guests1.forEach((guests2, i) => {
if(guests2===whocantmakeit){
    guests1[i]="Asad"
    console.log(`Hi ${guests1[i]}, i would like to dinner with you thats why i'm inviting you`)}
else {console.log(`Hi ${guests2},i would like to dinner with you thats why i'm inviting you`)
}
})