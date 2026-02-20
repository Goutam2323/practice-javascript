let prompt= require("prompt-sync")();
let a = prompt("Enter a number: ");
for (let i = 1; i <= a; i++) {

    for (let j = 1; j <= 2*a; j++) {
        if(i==j || j==2*a-i+1){
        process.stdout.write("*");
        }
        else{
        process.stdout.write(" ");
        }
    }
    process.stdout.write("\n"); 
}