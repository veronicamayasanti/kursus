/*const tampilNama = function (nama){
    return `Hallo, ${nama}`;
}

console.log(tampilNama('veronica')); */

// cara menulis kode di atas menjadi lebih sngkat ada di bawah
//cara menulis arrow 

/*const tampilNama = (nama) => {return `halo, ${nama}`;}
console.log('veronica maya');*/

//jika parameter lebih dari satu

/*const tampilNama = (nama, waktu) => {
    return `selamat ${waktu}, ${nama}`;
}

Console.log(tampilNama('santi', 'pagi')); */


//jika parameter hanya satu bisa gunakan istilah implisit return
/*const tampilNama = nama =>  `halo, ${nama}`; 
console.log('veronica maya');*/


//jka tidak ada parameternya
/*const tampilNama = () => 'hello dunia tipu tipu';
Console.log(tampilNama());*/



//contoh menggunakan function map untuk memetakan sebuah function kedalam array
//contohnya sebuah array isinya akan di hitung jumlah hurufnya dan jumlahny di masukan ke array lagi


let mahasiswa = ['veronica', 'maya', 'santi'];
/*let jumlahHUruf = mahasiswa.map(function (nama) {
    return nama.length;
});
console.log(jumlahHUruf);*/

//cara menulis dengan arrow function
/*let jumlahHUruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHUruf);*/

//mengembalikan nilai dalam bentuk objek buka aray lagi

let jumlahHUruf = mahasiswa.map(nama => ({ nama: nama, jmlhuruf: nama.length }));
console.table(jumlahHUruf);
