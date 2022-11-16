// callback adalah function yang dikirimkan sebagai parameter pada function yang lain
// callback adalah function yang dieksekusi setelah fungsi lain selesai dijalankan


// contoh 1. synchronous callback
// function halo(nama) {
//     alert(`hallo, ${nama}`)
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(halo);


// contoh 2. synchronous callback sebuah function yang parameternya function juga
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`halo, ${nama}`));



const mhs = [
    {
        "nama": "veronica maya",
        "nrp": "010592",
        "email": "vero@gmail.com",
        "jurusan": "pemat",
        "idDosenWali": 1
    },
    {
        "nama": "vsanti wijaya",
        "nrp": "0920501",
        "email": "santi@gmail.com",
        "jurusan": "pefis",
        "idDosenWali": 2
    },
    {
        "nama": "samantha",
        "nrp": "281217",
        "email": "samantha@gmail.com",
        "jurusan": "pebio",
        "idDosenWali": 3
    },
    {
        "nama": "geonathan",
        "nrp": "141120",
        "email": "geo@gmail.com",
        "jurusan": "pgsd",
        "idDosenWali": 4
    },
]


mhs.forEach(m => console.log(m.nama));