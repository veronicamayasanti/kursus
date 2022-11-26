// Optional chaining operator(?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish
// Jika kita mencoba mengakses property dari sebuah object dari data nullish tanpa menggunakan optional chaining operator, maka akan terjadi error

// Error Mengakses Property Nullish
// let person = {};
// alert(person.address.country);


// Pengecekan Menggunakan If
// let person = {};

// let say;
// if (person.address !== undefined && person.address !== null) {
//     say = person.address.country;
// }
// alert(say);

// Pengecekan Menggunakan Optional Chaining
let person = {};
alert(person?.address?.country);