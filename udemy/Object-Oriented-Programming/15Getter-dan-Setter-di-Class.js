// Class juga mendukung pembuatan getter dan setter
// Perlu diingat, getter dan setter ini akan berada di prototype, bukan di instance object

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value){
        const result = value.split(" ");
        this.firstName = result[0];
        this.lastName = result[0];
    }
}

const maya = new Person("maya", "wijaya");
console.log(maya);
console.log(maya.fullName);

maya.fullName = "alex wijaya";
console.info(maya);

