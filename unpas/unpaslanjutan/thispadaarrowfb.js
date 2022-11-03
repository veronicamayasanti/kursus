//lanjutan arrow function. 
//konsep this pada arrow function
// membuat object pada javascript dengan menggunakan constructor Function

/*const Mahasiswa = function () {
    this.nama = 'maya';
    this.umur = 30;
    this.sayHello = function () {
        console.log(`hallo, nama saya ${this.nama}, dan usia saya ${this.umur} tahun`);
    }
}

const santi = new Mahasiswa(); */



//contoh menggunakan arrow function
/*const Mahasiswa = function () { // tidak bisa semua bisa di ubah menjadii arrow function
    this.nama = 'maya';
    this.umur = 30;
    this.sayHello = () => { // tapi untuk method bisa jadi arrow function
        console.log(`hallo, nama saya ${this.nama}, dan usia saya ${this.umur} tahun`);
    } // arrow function tidak menyimpan konteks this
}

const santi = new Mahasiswa(); */



// contoh dengan object literal

/*const mhs1 = {
    nama: 'maya',
    umur: 30,
    sayHello: () => { // mengggunakan arrow function maka hasilnya akan undefined karena tidak ada konsep this pada arrow function
        console.log(`hallo, nama saya ${this.nama}, dan usia saya ${this.umur} tahun`);
    }
} */

// contoh lain

/*const Mahasiswa = function () {
    this.nama = 'maya';
    this.umur = 30;
    this.sayHello = function () {
        console.log(`hallo, nama saya ${this.nama}, dan usia saya ${this.umur} tahun`);
    }
    setInterval(() => {
        console.log(this.umur++);
    }, 500);

}

const santi = new Mahasiswa();*/



