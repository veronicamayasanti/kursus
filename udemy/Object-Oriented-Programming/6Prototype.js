// JavaScript sebelumnya dikenal dengan pemrograman berbasis prototype
// Memang agak sedikit membingungkan, dan tidak dipungkiri, banyak sekali yang bingung dengan konsep prototype di JavaScript
// Pada chapter ini, kita akan bahas tentang konsep prototype


// Prototype Inheritance
// Saat kita membuat object dari constructor function, object tersebut disebut instance, semua property(baik itu value atau method), akan berada di dalam instance object nya
// Setiap kita membuat sebuah constructor function, maka secara otomatis akan dibuatkan prototype nya, misal ketika kita membuat constructor function Person, maka akan ada Person.prototype
// Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructor.prototype nya
// Untuk mengakses prototype milih sebuah instance, kita bisa menggunakan __proto__

// Kode : Object Instance
function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (nama){
        console.log(`hallo ${nama}, salam kenal nama aku ${this.firstName}`);
        
    }
}

// Menambahkan Property ke Prototype
Person.prototype.sayBye = function(){
    console.log("good bye");
    
}

Person.prototype.run = function (){
    console.log(`${this.firstName} is running`);
    
}


const maya = new Person("santi","alex");
// Menambah Property ke Instance Object
// maya.sayBye = function (){
//     console.log(`good bye`);
    
// }
console.log(maya);

const thata = new Person("samantha", "wijaya");
console.log(thata);

