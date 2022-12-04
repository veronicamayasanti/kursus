// Pada tipe data object, kita sudah membahas tentang property di object
// Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di object
// Cara pembuatannya pun sama dengan function sebagai value
// Function di object kadang disebut juga sebagai Object Method

//membuat object dengan method
// const person = {
//     name: 'geonathan',
//     sayHello: function (name) {
//         alert(`hai hai ${name}`)
//     }
// };

// person.sayHello('wijaya');



// menambah method ke object
const person = {
    name: 'alex'
};

person.sayHello = function (name){
    alert(`Hello ${name}`);
};

person.sayHello('geo');