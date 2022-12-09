// Sebenarnya setelah kita membuat object, kita bisa dengan mudah menambahkan property ke dalam object tersebut hanya dengan menggunakan nama variable nya, diikuti tanda titik dan nama property
// Namun jika seperti itu, alhasil, constructor function yang sudah kita buat tidak terlalu berguna, karena property nya hanya ada di object yang kita tambahkan property
// Untuk menambahkan property di dalam semua object yang dibuat dari constructor function, kita bisa menggunakan kata kunci this lalu diikuti dengan nama property nya

function Person(){
    this.firstName = "";
    this.lastName = ""
}

const eko = new Person();
eko.firstName = "eko";
eko.lastName = "bambang";


const budi = new Person();
budi.firstName= "budi";
budi.lastName= "anton";


console.log(eko);
console.log(budi);

