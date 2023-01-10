// Reflect merupakan class yang digunakan untuk mengeksekusi JavaScript function
// Reflect tidak memiliki constructor, dan cara penggunaan Reflect tidak dengan membuat object dengan new Reflect
// penggunaan Reflect adalah menggunakan banyak sekali static methodnya


const person = {};

Reflect.set(person, "firstName", "veronica");
Reflect.set(person, "lastName", "wijaya")

console.log(person);

console.log(Reflect.get(person, "firstName"));
console.log(Reflect.get(person, "lastName"));

console.log(Reflect.has(person, "firstName"));
console.log(Reflect.has(person, "lastName"));