// spread operator
// memecahkan iterables menjadi single element

// const mhs = ['veronica', 'maya', 'santi'];
// console.log(mhs); // hasilnya masih tetap array
// console.log(...mhs); // hasilnya array akan terurai
// console.log(...mhs[1]); // hasilnya tulisan maya terpecah m a y a karena string juga termasuk iterebles




// spread operataor atau ... digunakan untuk menggabungkan 2 array
// const mhs = ['veronica', 'maya', 'santi'];
// const dosen = ['geonathan', 'rasmus','wijaya'];
// const orang = [...mhs,'Alex', ...dosen]; // hasilnya gabungan ke2 array, bisa dengan mudah menambah element
// const orang = mhs.concat(dosen); // bisa pakai concat namun jika ingin menambah element di tengah antara array mhs dan dosen tidak mudah
// console.log(orang); 




// meng-coppy array
// const mhs = ['veronica', 'maya', 'santi'];
// const mhs1 = [...mhs];
// mhs1[0]='Alex'
// console.log(mhs);


// const liMhs = document.querySelectorAll('li');
//cara looping
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);




const nama = document.getElementById('nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;





