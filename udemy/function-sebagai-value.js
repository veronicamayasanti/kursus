// Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value
// Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya

// function di variable

function sayHello(name) {
    console.log(`hello ${name}`);
}

sayHello("veronica");

let say = sayHello;

say("maya");

function giveMeName(callback) {
    callback("santi");
}

giveMeName(sayHello);