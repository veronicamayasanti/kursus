// With statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data
// Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya

// tanpa with statement
// const person = {
//     firstName: "alexander",
//     middleName: "hendra",
//     lastName: "wijaya"
// }

// console.log(person.firstName);
// console.log(person.middleName);
// console.log(person.lastName);


// dengan with statement
// const person = {
//     firstName: "alexander",
//     middleName: "hendra",
//     lastName: "wijaya"
// }

// with(person){
// console.log(firstName);
// console.log(middleName);
// console.log(lastName);
// }


// With Statement Tidak Direkomendasikan

// Walaupun fitur with statement ini sangat menarik
// Namun kebanyakan orang tidak merekomendasikan penggunaan with statement
// Hal ini dikarenakan with statement kadang membuat sebuah kode menjadi ambigu

const person = {
    firstName: "alexander",
    middleName: "hendra",
    lastName: "wijaya"
}

const firstName = "geonathan";
const lastName = "rasmus";

with (person) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}
