/*
Operator logika adalah operator untuk dua buah data boolean
Hasil dari operator logika adalah boolean lagi
*/
//contoh

const nilaiUjian = 70;
const nilaiAbsensi = 78;

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;
console.log(lulusUjian);
console.log(lulusAbsensi);



const lulus = lulusUjian && lulusAbsensi;
console.log(lulus);
