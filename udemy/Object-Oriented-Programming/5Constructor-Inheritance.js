// Dalam constructor kita biasanya membuat property baik itu berisi value ataupun function
// Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain tersebut
// Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)

function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function(name){
        console.log(`hai ${name} nice to meet you, my name is ${this.firstname}`);
        
    }
}

function Manager(firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName)
    
}

const santi = new Manager("maya", "wijaya")
console.log(santi);
