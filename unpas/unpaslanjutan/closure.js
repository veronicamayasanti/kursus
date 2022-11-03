/*function init() {
    //let nama = 'maya'; // local variabel
    return function (nama) { // inner function (closure)
        console.log(nama); // akses ke parent variabel
    }
}
let panggilNama = init();
panggilNama('maya');
panggilNama('wijaya'); */



/*function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`hallo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!!`);
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatMalam = ucapkanSalam('malam');
selamatPagi('maya');
selamatMalam('wijaya');

console.dir(selamatMalam('santi')); */




let add = (function (){
    let counter = 0;
    return function(){
    return ++counter;
    }
})();



console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());