// Map
// Map merupakan representasi dari struktur data key-value
// Map mirip dengan tipe data object, hanya saja pada Map, semua method untuk manipulasi data sudah disediakan
// Map mengikuti kontrak iterable, sehingga bisa di iterasi secara default
// Perbedaan Map dan Object

// Map
// 1. pertama dibuat dtidak memiliki key
//  2. key bisa tipe data apapun
//  3. jumlah key bisa diketahui dengan atribute size
//  4. secara default tidak bisa dikonversi ke JSON


// Object
// 1. karena memiliki prototype, bisa jadi memiliki default key ketika pertama dibuat
// 2. key hanya bisa string atau symbol
//  3. jumlah key diketahui harus manual menggunakan iterasi
// 4. bisa dikonversi ke JSON secara otomatis

// Map

{
    const map = new Map();
    map.set("Name", "veronica Maya");
    map.set("Addres", "Pringsewu")

    console.log(map);
    console.log(map.get("Name"));
    console.log(map.get("Addres"));
    console.log(map.get("Hobby"));

    // cara yg kurang bagus
    for(const element of map){
        console.log(`${element[0]} : ${element[1]}`);
    }

    // cara bagus
    map.forEach((value, key) => console.log(`${key} : ${value}`))
}