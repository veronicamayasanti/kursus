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

// destructuring di function parameter (2) terhdap array

function sum([first, second]){
    return first + second;
}

console.log(sum([3,5]));

// Default Value
// Yang paling menarik di destructuring adalah, kita bisa menambahkan default value
// Jadi misal kita kita melakukan destructuring terhadap array, ternyata tidak ada datanya, maka kita bisa menambahkan default value
// Begitu juga pada object, jika ternyata property nya tidak ada, maka kita bisa menambahkan default value


// Default Value Destructuring Array
{
    const names = ['veronica','samantha'];
    const [firstName, middleName = 'geo', lastName = 'alex'] = names;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
    
}


// Kode : Default Value Destructuring Object
{
     const person = {
        firstName: 'veronica', 
        lastName: 'samantha'
    };
    
    const {firstName, middleName = 'geo', lastName } = person;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

// Menggunakan Nama Variable Lain
// Saat melakukan destructuring di Array, kita bisa dengan mudah membuat nama variable sesuka kita
// Namun pada saat melakukan destructuring, kita harus membuat nama variable sama dengan nama property
// Kita juga bisa menggunakan nama variable lain saat melakukan destructuring object jika kita mau

{
    const person = {
        firstName: 'veronica',
        lastName: 'samantha'
    };

    let { 
        firstName: namaDepan, 
        middleName: namaTengah = 'geo', 
        lastName: namaBelakang = 'thata' } = person;

    console.log(namaDepan);
    console.log(namaTengah);
    console.log(namaBelakang);
}


