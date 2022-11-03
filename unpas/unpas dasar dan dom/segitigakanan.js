let n = 5;
let string = '';
for (let i = 1; i <= n; i++){
    // cetak spasi
    for (let j = 0; j<n-i;j++){
        string += ' ';
    }
    // cetak bintang
    for (let k = 0; k < i; k++){
        string += '*';
    }
    string += '\n';
}
console.log(string);