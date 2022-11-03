// //event handler
// //inline HTML attribute
// const p3 = document.querySelector('.p3');
//
// function ubahWarna (){
//     p3.style.backgroundColor = 'pink';
// }
//
//
// //element method
// const p2 = document.querySelector('.p2');
// function ubahwarnaP2() {
//     p2.style.backgroundColor = 'lightgreen';
// }
// p2.onclick = ubahwarnaP2;
//
//
//
// //addEventListener()
//
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function (){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru nih bos');
//     liBaru.appendChild(teksLiBaru)
//     ul.appendChild(liBaru);
// });

// klik paraf 3 background jadi bewarna
//events hendlear
const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'pink';
// }
// p3.onclick = function (){
//     p3.style.color = 'red';
// }

//clik
// p3.addEventListener('click', function (){
//     p3.style.backgroundColor ='pink';
// });
// p3.addEventListener('click',function () {
//     p3.style.color ='red';
// });

//mouseenter dan mouseleave
p3.addEventListener('mouseenter', function (){
    p3.style.backgroundColor ='pink';
});
p3.addEventListener('mouseleave',function () {
    p3.style.backgroundColor ='grey';
});