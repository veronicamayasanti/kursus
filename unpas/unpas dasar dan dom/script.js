//DOM selection
// document.getElementBy ()
/* const judul = document.getElementById('judul');
 judul.style.color = ' red';
 judul.style.backgroundColor = 'green';
 judul.innerHTML = 'hallo maya wijaya';
 
 
 //document.getElementsByTagName()
const p = document.getElementsByTagName('p');
for (let i=0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontsize = '50px';


//document.getElementsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';*/


// document.querySelector() -> element
/*const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange'


// document.querySelectorAlll()
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}*/

 /*const sectionB = document.querySelector('section#b');
 const  p4 = sectionB.getElementsByTagName('p')[0];
 p4.style.backgroundColor = 'pink';*/

//video ke5 dari DOM

/*const judul = document.getElementById('judul');
judul.innerHTML = 'maya wijaya';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'selamat pagi';*/


/*const judul = document.querySelector('#judul');
judul.style.color = 'pink';
judul.style.backgroundColor = 'grey';*/

/*const judul = document.getElementsByTagName('h1')[0];
const a = document.querySelector('section#a a');*/


//video ke6 manipulasi Node
// DOM Manipulasi
// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Ini paragraf baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
//simpan p baru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//menmbah item baru di li
const liBaru = document.createElement('li');
const teksLiBaru =document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const  li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li2);


const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'pink';
liBaru.style.backgroundColor ='pink';
h2Baru.style.backgroundColor =  'pink';




