const angka = [2, 8, 7, 1, 2, 6, -4, 5, 9, 1];

// akan mencari angka >=3
// dengan menggunakan for
/*const newAngka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}
console.log(newAngka);*/


// menggunakan filter
/*const newAngka = angka.filter(function(a){
    return a >= 3
});
console.log(newAngka);*/


// menggunakan filter dan arrow function
/*const newAngka = angka.filter (a => a >= 3);
console.log(newAngka);*/

// map artinya kita akan memetekan tiap element yang ada
// isi array pada angka akan dikali dengan2

//menggunakan map dan arrow function
/*const newAngka = angka.map(a => a *2);
console.log(angka); // array angka isi tidak berubah
console.log(newAngka);*/


//reduce
//melakuka sesuatu untuk seluruh element pada array
//misal isi array pada angka semuanya akan dijumlahkan
/*const newAngka = angka.reduce((accumulator, currentValue) =>
accumulator + currentValue, 0);
console.log(newAngka);*/


//method chaining , berantai
//cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 5).map(a => a * 3).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(hasil);






