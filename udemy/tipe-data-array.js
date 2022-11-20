let arrayKosong = [];
let arrayNama = ['veronica', 'maya', 'santi'];

const names = [];

// operasi di Array
// 1. array.push(value) menambah data ke array
names.push('veronica');
names.push('maya', 'wijaya');
names.push('samantha', 'alexander')
console.log(names);
console.table(names);
// 2. array.length untuk mendapatkan panjang array
console.info(names.length);
// 3. array[index] mendapatkan data di posisi index
console.log(names[2]);
// 4. array[index]=value mengubah data di posisi index
names[0] = 'geonathan';
// 5. delete array[index] menghapus data di posisi index, namun index tidak bergerak
delete names[3];
console.table(names);
names[3]="di isi lagi"
console.table(names);

// tipe data array bebas
names.push('2','5','9');
console.table(names);

// bisa memasukan array ke dalam array
names.push(['aku','sedang','belajar','javascript','4','1','8']);
console.table(names);






