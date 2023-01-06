// symbol
// symbol merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat data symbol
//  symbol banyak digunakan untuk membuat key pada object

const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = "maya";
person[lastName] = "veronica";

console.log(person);
console.log(person[firstName]);
console.log(person[lastName]);


//  symbol For
// pembuatan symbol juga bisa menggunakan static method Symbol.for(key)
// jika kita menggunakan key yang sama, Symbol yang sama akan selalu dikembalikan

{
    console.log(Symbol.for("firstName") === Symbol.for("firstName"));

    const person = {};
    person[Symbol.for("firstName")] = "maya";
    person[Symbol.for("lastName")] = "veronica";

    console.log(person);
    console.log(person[Symbol.for("firstName")]);
    console.log(person[Symbol.for("lastName")]);

    
}