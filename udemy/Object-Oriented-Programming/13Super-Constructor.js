// Class Inheritance sifatnya seperti Prototype Inheritance
// Bagaimana dengan Constructor Inheritance ? Sebenarnya Constructor Inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini
// Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kita bisa menggunakan kata kunci super di dalam constructor
// Kata kunci super digunakan untuk memanggil constructor super class
// Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor


class Employee {
    constructor(firstName){
        this.firstName = firstName;
    }
    sayHello(name) {
        console.log(`hai ${name}, my name is employee ${this.firstName}`);

    }
}

class Manager extends Employee {
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }
    sayHello(name) {
        console.log(`hai ${name}, my name is manager ${this.firstName} ${this.lastName}`);

    }
}

const maya = new Employee("maya");
maya.sayHello("santi");


const thata = new Manager("thata", "michel");
thata.sayHello("santi")

console.info(maya);
console.info(thata);