//cara untuk membuat object pada javascript
//1. object literal
//let mahasiswa = {
 //   nama: 'veronica',
 //   energi:15,
//    makan : function (porsi) {
//        this.energi = this.energi+porsi;
//        console.log(`selamat makan ${this.nama} `);
 //   }
//}

//2. function declaration

const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat mkan`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`helo ${this.nama}, selamat bermain`);
    }
}


function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama=nama;
    mahasiswa.energi = energi;
    
    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`hallo ${nama}, selamat makan`)
    }
    
    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log(`hallo ${this.nama}, selamat bermian`)
    }
    
    return mahasiswa;
}

let veronica = Mahasiswa('veronica',15);


// 3. constructor function
// key new
/*function Mahasiswa(nama, energi) {
    this.nama=nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`hallo ${nama}, selamat makan`)
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`hallo ${this.nama}, selamat bermian`)
    }
}

let veronica = new Mahasiswa('veronica',15);*/