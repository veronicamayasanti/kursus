// For In merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array
// Walaupun for in bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array, karena biasanya kita jarang sekali butuh data index untuk Array, kita bisa menggunakan For Of(yang dibahas setelah ini)

// for In di Object
const person = {
    firstName: 'veronica',
    middleName: 'maya',
    lastName: 'wijaya'
};

for (const property in person) {
    document.writeln(`<p>property ${property} : ${person[property]}</p>`)
}


// for in di Array

const names = ['veronica', 'maya', 'wijaya'];

for (const index in names) {
    document.writeln(`<p>Index ${index} : ${names[index]}</p>`)
}