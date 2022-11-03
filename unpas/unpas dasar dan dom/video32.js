function cetakAngka (n){
    //base case
    if (n===0){
        return
    }
    console.log(n);
    cetakAngka(n-1);
}
cetakAngka(20);