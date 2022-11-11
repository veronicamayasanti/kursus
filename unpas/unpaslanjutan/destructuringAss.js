// destructuring variable/assigment

// cara biasa
/*const perkenalan = ['hallo', 'nama', 'saya', 'veronica maya'];
const salam = perkenalan[0];
const nama= perkenalan[3];
console.log(nama);*/


// cara destructuring Array
//const perkenalan = ['hallo', 'nama', 'saya', 'veronica maya'];
//const [salam, satu, dua, nama]=perkenalan;

// cara skipping items pada array perkenalan
//const [salam, , , nama] = perkenalan; // tetap diberi koma
//onsole.log(salam);
//console.log(nama);



//swap item atau menukar isi variable pada contoh array
/*let a = 1;
let b = 2;
console.log(a);
console.log(b);

[a,b]=[b,a];
console.log(a);
console.log(b); */


//return value pada function, jqei fn nya bisa mengembalikan array dan array di tangkap oleh sintak destructuring

//function coba() {
 //   return [1, 2, 5];
//}
//cara biasa
/*const a = coba();
console.log(a[1]);*/

//cara destructuring
//const [a, b, c]=coba();
//console.log(c);




//rest parameter (tidak tau arraynya akan ada berapa)
/*const [a, ...nilaiYangLainnya] = [1,2,3,4,5,6];
console.log(a);
console.log(nilaiYangLainnya);*/





//destructuring object
/*const mhs = {
    nama : 'maya wijaya',
    umur : 30
}

const {nama, umur} = mhs;
// nama variable harus sama denganpropertionjek
console.log(nama);
console.log(umur);*/


// contoh melakukan destructuring object tanpa melakukan deklarasi object literal
// assigment  tanpa deklarasi object
//({nama, umur}={nama:'maya wijaya', umur:30});

//console.log(umur);

// jika ingin nama variable berbeda dengan nama proprerti object
/*const mhs = {
    nama: 'maya wijaya',
    umur: 30
}

const { nama: n, umur: u } = mhs;
// nama variable jika ingin beda dengan properti objek
console.log(n);
console.log(u); */


//memberi default value
/*const mhs = {
    nama: 'maya wijaya',
    umur: 30
}

const { nama, umur, email = 'vero@gmail.com' } = mhs;
console.log(nama);
console.log(umur);
console.log(email); */


// memberi nilai default + assign ke variabel baru
/*const mhs = {
    nama: 'maya wijaya',
    umur: 30
}

const { nama:n, umur:u, email:e = 'vero@gmail.com' } = mhs;
console.log(n);
console.log(u);
console.log(e);*/




// rest parameter
/*const mhs = {
    nama: 'maya wijaya',
    umur: 30,
    hobi: 'makan'
}

const { nama, ...value } = mhs;
console.log(value);*/




//mengembal field pada object, stelah dikirim sebagai parameter untuk function
const mhs = {
    id:123,
    nama: 'maya wijaya',
    umur: 30,
    hobi: 'makan'
}

function getIdMhs({nama}){
    return nama;
}
 console.log(getIdMhs(mhs))




