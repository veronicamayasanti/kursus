// Sebelumnya kita selalu membuat function dengan nama
// Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymous function
// Kita bisa buat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter

// anonymus function di variable / function tanpa nama
let say = function (name) {
    console.log(`hello ${name}`);
};

say('veronica');


// anonymus function di parameter
function giveMeName(callback) {
    callback('michelina')
}

giveMeName(say);

