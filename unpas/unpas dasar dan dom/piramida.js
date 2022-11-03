let n = 5;
let s = '';

for (let i = 1; i <= n; i++){
    // mencetak spaces
    for (let j = 1; j <= n-i; j++){
        s += ' ';
    }
    // mencetak bintang
    for (let k = 0; k < 2*i-1;k++){
        s += '*';
    }
    s += '\n';
}
console.log(s);