// util adalah standar library yang berisikan utility2 yang bisa kita gunakan untuk mempermudah pembuatan kode program di NodeJS

import util from "util";

const firstName = "maya";
const lastName = "wijaya"

console.log(`Hello ${firstName} ${lastName}`);
console.log(util.format("hello %s", firstName, lastName ));

const person = {
    firstName: "maya",
    lastName: "wijaya"
}

console.log(`person : ${JSON.stringify(person)}`);
console.log(util.format("person: %j", person));