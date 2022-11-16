// Rest Parameter
// merepresentasikan argument pada function dengan jumlah yg tdk terbatas menjadi array


// contoh 1
// function myFunc(a,b,...myArgs){ // rest parameter  hanya bisa di tulis di akhr
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }
// console.log(myFunc(1,2,3,4,5,6,7,8,9,0));


// contoh 2
// function myFunc(...myArgs){
//     return myArgs;
// }
// console.log(myFunc(1,2,3,4,5,6,7,8,9,0));


// contoh 3 (merubah bentuk argument menjadi array menggunakan from)
// function myFunc(){
//     return Array.from(arguments);
// }
// console.log(myFunc(1,2,3,4,5,6,7,8,9,0));



// contoh 4 (merubah bentuk argument menjadi array menggunakan spread operator) 
// function myFunc() {
//     return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));




//contoh 5, menjumlahkan semua isi parameter menggunakan looping for of
// function jumlahkan(...angka){
//     let total = 0;
//     for(const a of angka){
//         total += a;
//     }
//     return total
// }
// console.log(jumlahkan(1,2,3,4,5));





//contoh 6, menjumlahkan semua isi parameter menggunakan reduce
// function jumlahkan(...angka) {
//     return angka.reduce((a,b) => a+b)
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));



// contoh 7, array destructuring
// const kelompok1 = ['veronica','maya','santi','samantha','geonathan'];
// const [ketua, wali, ...anggota]=kelompok1;
// console.log(anggota);


//contoh 8, object destructuring
// const team = {
//     pm: 'veronica',
//     fronEnd1: 'maya',
//     fronEnd2: 'santi',
//     backEnd: 'geonathan',
//     ux: 'samantha',
//     devOps: 'alex'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);




// contoh 9, filtering
// function filterBy(type, ...values){
//     return values.filter(v => typeof v === type);
// }

// console.log(filterBy(`number`, 1,2,3, 'maya', false, 5, true, 'santi'));


