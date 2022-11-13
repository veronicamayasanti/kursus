// beberapa cara looping isi dari Array
//array
// const mhs = ['veronica', 'samantha', 'geo']

//1. for
// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }


//2. forEach : khusus unntuk looping array
// mhs.forEach(m => console.log(m));

//3. for of
// for (const m of mhs) {
//     console.log(m);
    
// }



// string
// contoh melooping setiap karakter pada string
// const nama = 'michelinaGeonathan'
// for (const n of nama) {
//     console.log(n);
// }


//mengambil string pada array
// const mhs = ['vero', 'samantha', 'geonthan']

//menggunakan forEach
// mhs.forEach((m,i) => {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);  
// })


//menggunakan for of
// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);  
// }




// NodeList
// const liNama = document.querySelectorAll('.nama')


// liNama.forEach(n => console.log(n.innerHTML));

// for (n of liNama) {
//     console.log(n.innerHTML);
// }



//arguments

// function jumlahkanAngka(){

// // looping argument tidak bisa menggunakan reduce atau forEach
// // bisa menggunakan for of

// let jumlah = 0;
// for (a of arguments) {
//     jumlah += a;
// }
// return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));



// for in
const mhs = {
    nama: 'veronica',
    umur: 30,
    email:'vero@mail.com'
}


for (m in mhs) {
    console.log(mhs[m]);
}

