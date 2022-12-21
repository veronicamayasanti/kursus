// Number merupakan function yang digunakan untuk melakukan konversi ke tipe data number
// Jika data tidak bisa dikonversi ke number, secara otomatis hasilnya adalah NaN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 


const input = "123456";
const number = Number(input);

console.log(typeof input);
console.log(typeof number);
console.log(number);

console.log(Number("salah"));


// Number Static Properties
// Number memiliki banyak static properties, seperti :
// Number.MIN_VALUE untuk mendapat number minimal
// Number.MAX_VALUE untuk mendapat number maksimal
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties 

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN);

// Number Static Method
// Number memiliki banyak static method, seperti :
// Number.isNaN(value) untuk mengecek apakah value NaN atau bukan
// Number.isInteger(value) untuk mengecek apakah value berupa integer atau bukan
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_methods 
