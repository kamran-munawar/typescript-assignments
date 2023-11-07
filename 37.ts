// Large Shirts: Modify the make_shirt() function so that 
//shirts are large by default with a message that
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_Shirt(size:string="Large",message:string="Reads | I love typescript"){
    console.log(`you order a shirt size: "${size}" with the message "${message}"`)
}
make_Shirt()
make_Shirt("medium")
make_Shirt(`large`,"Hi Dude i love python")