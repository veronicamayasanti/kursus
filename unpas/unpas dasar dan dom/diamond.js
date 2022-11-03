let n = 5;
let string = '';

for (let i = 1; i<=n; i++){
    // cetak spasi
    for (let j = n; j > i; j--){
        string += ' ';
    }
    //cetak bintang
    for (let k = 0; k < i * 2 -1; k++){
        string += '*';
    }
    string += '\n';
}
// piramida kebawah

for (let i = 1; i <= n-1; i++){
    //cetak spasi
    for (let j = 0; j <i; j++){
        string += ' ';
    }
    // cetak bintang
    for ( let k = (n-i)*2-1; k > 0; k--){
        string += '*';
    }
string += '\n';
}
console.log(string);