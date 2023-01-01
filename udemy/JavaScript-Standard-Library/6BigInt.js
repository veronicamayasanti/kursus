// BigInt merupakan tipe data Number yang bisa mencakup data angka lebih dari Number.MAX_SAFE_INTERGER
// angka lebih besar dari itu sangat disarankan menggunakan tipe dara BigInt

const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MAX_SAFE_INTEGER);

const c = a + b;
console.log(c);
console.log(typeof c);

