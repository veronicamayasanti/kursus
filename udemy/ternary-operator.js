// Ternary operator adalah operator sederhana dari if statement
// Ternary operator terdiri dari  kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika false, maka nilai kedua diambil

// tanpa ternary operator
// const nilai = 55;
// let ucapan;

// if (nilai >= 75){
//     ucapan = 'selamat Anda Lulus';
// }else {
//     ucapan = 'silahkan coba lagi'
// }

// document.writeln(`<p>${ucapan}</p>`)


// dengan ternary operator
const nilai = 80;
const ucapan = nilai >= 75 ? "selamat Anda Lulus" : "silahkan coba lagi";

document.writeln(`<p>${ucapan}</p>`);