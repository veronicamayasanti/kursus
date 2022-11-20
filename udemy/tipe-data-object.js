/*
Tipe data object adalah tipe data yang mirip dengan tipe data Array
Yang membedakan adalah index pada tipe data object bisa menggunakan string
Index di object biasanya disebut attributes atau properties, bukan index
*/

// membuat object kosong
//const orang = {}; // kalau array pakai [] object {}

//merubah property atau arttibute
// orang['nama'] = 'veronica maya';
// orang['alamat'] = 'lampung';
// orang['umur'] = 30;

//menghapus
// delete orang['umur'];
// console.log(orang);


// membuat object dengan properties
const orang = {
    nama: 'veronica maya',
    'alamat tinggal': 'lampung', // nama property lebida dari 1kata gunakan ' 'atau " "
    umur: 30
};
console.table(orang);

// Mengakses property object
console.log(`nama : ${orang.nama}`);
console.log(`alamat : ${orang['alamat tinggal']}`);
console.log(`umur : ${orang.umur}`);