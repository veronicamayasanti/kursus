// Getter dan Setter adalah kemampuan membuat function yang berbeda untuk mengambil data(Getter) dan mengubah data(Setter) pada sebuah property di Object
// Dengan menggunakan Getter dan Setter, kita bisa melakukan hal apapun dalam function sebelum sebuah property di akses atau diubah, misal menambah validasi dan lain - lain

// getter
const person = {
    firstName: 'veronica',
    lastName: 'wijaya',
    get fullName(){ // get = fitur getter
        return `${this.firstName} ${this.lastName}`;
    },
    // setter
    set fullName(value){
        const array = value.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
};

// otomatis mengambil get fullName()
console.log(person.fullName);


// setter merubah data
person.fullName = 'geonathan rasmus';
console.table(person);
