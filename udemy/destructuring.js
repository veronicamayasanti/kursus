// Destructuring adalah fitur yang bisa digunakan untuk membongkar value - value di array atau object ke dalam variable - variable
// Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu

// mengambil data array secara manual
// const names = ["icha", "geo", "thata", "alex", "hendra"];
// const firstName = names[0];
// const middleName = names[1];
// const lastName = names[2];

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);


// mengambil data array dengan  destructuring Array
// const [firstName, middleName, lastName, ...others] = names;

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);
// console.log(others);


// mengambil data di object
// const person = {
//     namaAwal: "veronica",
//     namaAkhir: "santi",
//     alamat: {
//         jalan: "jln bendungan",
//         kota: "pringsewu",
//         negara: "indonesia"
//     },
//     hobi: "makan",
//     youtube: "thata dan geo"
// };
// cara manual mengambil data di object
// const namaAwal = person.namaAwal;
// const hobi = person.hobi;
// console.log(namaAwal);
// console.log(hobi);

// mengambil data dengan destructuring object
// const {namaAwal, namaAkhir, alamat, ...lainnya} = person;
// console.log(namaAwal);
// console.log(namaAkhir);
// console.log(alamat);
// console.log(lainnya);

// destructuring nested object
// const { namaAwal, namaAkhir, alamat: {jalan, kota, negara}, ...lainnya } = person;
// console.log(namaAwal);
// console.log(namaAkhir);
// //console.log(alamat);// tidak bisa mengakses alamat lagi,
// console.log(jalan);
// console.log(kota);
// console.log(negara);
// console.log(lainnya);


// Destructuring Function Parameter
// Destructuring tidak hanya bisa dilakukan di variable, tapi juga bisa dilakukan di function parameter
// Hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau object dalam function

function displayPerson({firstName, middleName, lastName}){
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

const person = {
    firstName: "maya",
    middleName: "santi",
    lastName: "wijaya"
};

displayPerson(person);








