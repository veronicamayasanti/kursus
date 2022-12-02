// Scope merupakan area akses sebuah data
// Ada dua jenis scope, global scope dan local scope.
// Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
// Data di global scope bisa diakses dari local scope, namun data di local scope hanya bisa di akses di local scope tersebut atau di scope local dibawahnya(dalam kasus function dalam function)

// global scope
let counter = 0;

// global scope
function hitMe() {
    // local scope hitMe
    counter++
}

// global scope
function other() {
    //local scope other
}

hitMe();
console.log(counter);


/////////
//local scope
// function first() {
//     //local scope first
//     let firstVariable = "first"
// }

// function second() {
//     // local scope
//     let secondVariable = "second"
// }

// first();
// second();

// //global scope
// console.log(firstVariable); // error


// nested function scope
function first() {
    let firstVariable = "first"

    function second() {
    // local scope
    console.log(firstVariable);
    
    }
    second()
}

first();