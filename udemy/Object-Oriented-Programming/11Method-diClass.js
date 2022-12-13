// Membuat method di class sebenarnya bisa dilakukan dengan cara seperti menambahkan method di constructor function
// Namun, hal tersebut sebenarnya menambahkan method ke dalam instance object
// Khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object
// Untung nya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype

class Person {
    constructor(name) {
        this.name = name

    }

    sayHello(name){
        console.log(`haii ${name}, my name is ${this.name}`);
        
    }
}

const maya = new Person("maya");
console.log(maya);
