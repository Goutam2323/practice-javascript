function fibonaaci(n){
    if(n <= 1){
        return n;
    }
     return fibonaaci(n-1) + fibonaaci(n-2);
}
function printFibonacce(n){
for(i=1;i<=n;i++){
    
process.stdout.write(" " + fibonaaci(i).toString() );
}
console.log()
}

printFibonacce(11)