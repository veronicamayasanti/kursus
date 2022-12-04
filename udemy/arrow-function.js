// Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
// Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
// Dinamakan arrow function karena menggunakan tanda => (seperti panah)
// Berikut contoh beberapa kekurangan arrow function :
//     tidak memiliki fitur arguments object
// tidak bisa menggunakan function generator
// tidak bisa mengakses this(yang nanti akan dibahas di function di object)
// tidak bisa mengakses super(yang nanti akan dibahas di JavaScript Object Oriented Programming)


// arrow function
// const sayHello = (name) => {
//     const say = `hello ${name}`;
//     console.log(say);
    
// }

// sayHello('veronica');


// Arrow Function Tanpa Block
// Jika sebuah arrow function isinya sederhana, misal hanya satu baris
// Kita bisa membuat arrow function tanpa harus menggunakan block

const sayHello = (name) => console.log(`halo ${name}`);
sayHello('veronica');


// Arrow Function Return Value
// Arrow function bisa mengembalikan value, sama seperti function biasanya
// Jika menggunakan block, maka kita perlu menggunakan kata kunci return
// Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return 

const sum = (first, second) => first + second;
console.log(sum(100,100));


// Arrow Function Tanpa Kurung Parameter
// Jika parameter di arrow function hanya satu, kita bisa tidak menggunakan kurung pada parameter

const tanya = nama =>  console.log(`hai ${nama}`);
tanya('maya');


// Arrow Function Sebagai Parameter
// Karena arrow function sama seperti anonymous function
// Jadi kita juga bisa menggunakan arrow function sebagai parameter di function lain

function giveMeName(callback) {
    callback('samantha');
}

//anonymus function
// giveMeName(function (name) {
//     console.log(`hello ${name}`);
    
// })

// arrow function
giveMeName(name => console.log(`hai hai ${name}`));