// Sama seperti pada tipe data object biasanya, kita juga bisa menambahkan method di dalam constructor function
// Jika kita tambahkan method di constructor function, secara otomatis object yang dibuat akan memiliki method tersebut

function Person(){
    this.alamat= "";
    this.hobi= "";
    this.sayHello = function(nama){
        console.log(`hallo namaku ${nama}, aku hobi ${this.hobi}`);
    }
}

const maya = new Person();
maya.alamat = "sidodadi";
maya.hobi = "makan";
maya.sayHello("maya");

console.log(maya);
