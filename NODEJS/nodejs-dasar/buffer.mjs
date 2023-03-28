// buffer merupakan object yang berisikan urutan byte dengan panjang tetap
// buffer merupakan turunan dari tipe data Uint8Array

const buffer = Buffer.from("veronica");

console.log(buffer);
console.log(buffer.toString());

buffer.reverse();
console.log(buffer.toString());


// Buffer juga bisa digunakan