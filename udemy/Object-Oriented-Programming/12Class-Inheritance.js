// Sebelumnya kita sudah tahu bahwa prototype mendukung pewarisan, walaupun agak sedikit tricky cara pembuatannya
// Untungnya itu diperbaiki di ES6 dengan fitur class nya
// Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends
// Di JavaScript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class

class Employee {
    sayHello(name){
        console.log(`hai ${name}, my name is employee ${this.name}`);
        
    }
}

class Manager extends Employee {
    sayHello(name){
        console.log(`hai ${name}, my name is manager ${this.name}`);
        
    }
}

const maya = new Employee();
maya.name = "maya";
maya.sayHello("santi");


const thata = new Manager();
thata.name = "thata";
thata.sayHello("santi")