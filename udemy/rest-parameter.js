// Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak - banyak nya pada satu parameter, dan secara otomatis akan di konversi menjadi Array
// Untuk membuat rest parameter, ada ketentuannya
// Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
// Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah, kecuali memang cuma ada 1 parameter
// Di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument

//  rest parameter
// function sum(name, ...data) {
//     let total = 0;
//     for (const item of data) {
//             total += item
//     }
//     console.log(`total ${name} is ${total}`);
// }

// sum("orange", 10,20,30,40,50,60);



// spread syntax
// Kadang kita terlanjur memiliki data berupa Array
// Tapi untungnya kita juga bisa mengirim Array ke Rest Parameter
// Kita bisa gunakan … (titik tiga kali) diikuti dengan array nya ketika memanggil function
// Fitur ini dinamakan Spread Syntax


// spread syntax di rest parameter
function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item
    }
    console.log(`total ${name} is ${total}`);
}

sum("orange", ...[10, 20, 30, 40, 50, 60]);


// Arguments Object
// Sebelum ada fitur rest parameter, di JavaScript sudah ada fitur yang bernama arguments object
// Ini adalah fitur dimana kita bisa mengambil semua parameter dalam bentuk array dengan menggunakan object bernama arguments
// arguments secara otomatis bisa digunakan di function
// Namun perlu diingat, bahwa untuk JavaScript saat ini, lebih baik disarankan menggunakan rest parameter dibanding arguments object

function oldSum() {
    let total = 0
    for (const item of arguments) {
        total += item
    }
    console.log(`total is ${total}`);
}

oldSum(1,2,3,4,5,6,7,8,9,10)