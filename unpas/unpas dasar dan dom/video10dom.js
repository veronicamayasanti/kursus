// event handling
/*const close = document.querySelector('.close');
const card = document.querySelector('.card');

close.addEventListener('click', function () {
    card.style.display = 'none';
}) */

/*
//dom traversal
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card')

/*for (let i =0; i<close.length;i++){
    close[i].addEventListener('click', function () {
        //close[i].parentElement.style.display= 'none';
    });
}*/
/*
close.forEach(function (el) {
    el.addEventListener('click',function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    })
})


const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
   card.addEventListener('click', function (e) {
       alert('okee')
   }) 
});
*/

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    if( e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
    }
});