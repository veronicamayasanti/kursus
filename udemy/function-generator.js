// Function generator adalah function yang digunakan untuk membuat data generator
// Generator adalah data yang bisa di interasi seperti Array
// Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
// Dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya

// function generator sederhana
function* creatNames() {
    yield "veronica";
    yield "maya";
    yield "wijaya";
}

const names = creatNames();
for(const name of names){
    console.log(name);
    
}

// function generator kompleks

// function* buatGanjil(value) {
//     for(let i =1; i <= value; i++){
//         if(i % 2 === 1){
//             yield i;
//         }
//     }
// }

// const angkaGanjil = buatGanjil(20);
// for(const angka of angkaGanjil){
//     console.log(angka);
    
// }


// lazy evaluation
// Generator itu sifatnya lazy
// Jadi artinya jika data belum kita ambil dari generator, maka yield selanjutnya tidak akan di eksekusi
// membuat perulangan tidak henti henti
//lazy
function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            console.log(`yield ${i}`);
            yield i;
        }
    }
}

const angkaGanjil = buatGanjil(20);
for (const angka of angkaGanjil) {
    console.log(angka);

}

// eager
function buatGanjilArray(value) {
    const result = [];
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            console.log(`yield ${i}`);
            result.push(i);
        }
    }
    return result;
}

const numbers = buatGanjil(20);
// for (const angka of numbers) {
//     console.log(angka);

// }