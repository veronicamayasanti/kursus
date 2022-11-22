// undefined
// undefined adalah sebuah kata kunci di JavaScript
// undefined adalah sebuah tipe data
// Sebuah variable yang belum ditambahkan nilai, maka artinya variable tersebut merupakan tipe undefined
// undefined itu berbeda dengan null di bahasa pemrograman lain


// undefined variable
let name;
if (name === undefined) {
    alert('undefined');
} else {
    alert('Defined');
}


//undefined array value
const namaOrang = ['veronica', 'maya'];

if (namaOrang[2]===undefined) {
    alert('helo dunia')
}else {
    alert(`hello ${namaOrang[2]}`);
}

// Undefined Object Property
let person = {};
if (person.name.undefined) {
    alert('helo dunia')
} else {
    alert(`hello ${'person.name'}`);
};