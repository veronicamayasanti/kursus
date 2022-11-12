// destructuring pada function


/*function penjumlahanPerkalian (a,b){
    return [a+b, a*b];
}*/

//cara biasa

/*const jumlah = penjumlahanPerkalian(2,3)[0]; // jika hanya ingin melihat hasil penjumlahannya saja
console.log(jumlah);
const kali = penjumlahanPerkalian(2, 3)[1];// jika hanya ingin melihat hasil penjumlahannya saja
console.log(kali);*/


// dengan menggunakan destructuring

/*const[jumlah, kali]=penjumlahanPerkalian(2,3);
console.log(kali);
console.log(jumlah);*/

// kasus lain jika return value bertambah

/*function kalkulasi(a, b) {
    return [a + b,a-b, a * b, a/b];
}*/

//const [tambah, kurang, kali, bagi] = kalkulasi(2,3); //nama variabel harus berurutan dengan nama return array
//console.log(bagi);




// jika nama variabel tidak harus berurutan dengan return harus object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b, 
//         kurang: a - b, 
//         kali: a * b, 
//         bagi: a / b
//     }
// }

// //urutan tidak masalah krn sudah terasosiasi dengan nama properti
// const {bagi, tambah, kali, kurang} = kalkulasi(2,3); 
// console.log(kurang);




//function arguments biasa
const mhs1 = {
    nama: 'veronica',
    umur:30,
    email:'vero@gmail.com',
    nilai: {
        tugas: 80,
        uts: 70,
        uas: 90
    }
}


// function cetakMhs(nama, umur){
//     return `hello, nama saya ${nama}, saya berumur${umur}tahun.`
// }

// // fn deklasrasion biasa parameter kita pecah sendiri disini
// console.log(cetakMhs(mhs1.nama, mhs1.umur));



//destructuring function arguments

function cetakMhs({nama, umur, nilai:{tugas, uts, uas}}) {
    return `hello, nama saya ${nama}, saya berumur${umur}tahun. dan nilai uas saya adalah ${uas}.`
}

console.log(cetakMhs(mhs1));
