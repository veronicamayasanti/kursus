//cara untuk membuat object pada javascript
//1.object literal
// problemnya tidak efektif jika objectnya ada banyak
/*let mahasiswa = {
    //properti isinya nilai
    nama: 'veronica',
    energi: 10,
    //method adalah function di dalam object
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`hallo ${this.nama}, selamat makan`);
    }
}
*/

//2.function Declaeation
//kelebihanya tidak perlu membuat duplikat dari objectnya
//object.creat()

/*const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`hallo ${this.nama} selamat makan`)
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`hallo ${this.nama}, selamat bermain`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`hallo ${this.nama}, selamat tidur!`)
    }

}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;


    return mahasiswa;
}

let veronica = Mahasiswa('veronica', 10);
let santi = Mahasiswa('santi', 20);*/


//3. constraktor function
// menggunakan kata new
// menggunakan prototype
/*function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    Mahasiswa.prototype.makan = function (porsi) {
        this.energi += porsi;
        return `hallo ${this.nama} selamat makan`;
    }

    Mahasiswa.prototype.main = function (jam) {
        this.energi -= jam;
        return `hallo ${this.nama}, selamat bermain`;
    }

    Mahasiswa.prototype.tidur = function (jam) {
        this.energi += jam * 2;
        return `hallo ${this.nama}, selamat tidur`;
    }

}

let veronica = new Mahasiswa('veronica', 5); */

//versi class

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `hallo ${this.nama} selamat makan`;
    }

    main(jam) {
        this.energi -= jam;
        return `hallo ${this.nama}, selamat bermain`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `hallo ${this.nama}, selamat tidur`;
    }

}

let maya = new Mahasiswa('maya', 10);