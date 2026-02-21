function fibonaaci(n){
    if(n <= 1){
        return n;
    }
    return fibonaaci(n-1) + fibonaaci(n-2);
}
console.log(fibonaaci(11));