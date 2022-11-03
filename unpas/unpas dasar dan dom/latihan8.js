const ubahwarna = document.getElementById('ubahWarna');
ubahwarna.onclick = function () {
    //document.body.style.backgroundColor='green';
    document.body.classList.toggle('pink');
}


//membuat button dengan js
const acakWanra = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
acakWanra.appendChild(teksTombol);
acakWanra.setAttribute('type','button');

ubahwarna.after(acakWanra);

//membuat warna bacground acak
acakWanra.addEventListener('click', function () {
    //membuat angka random 1 - 255(angka maksiml warna rgh)
    const r = Math.round(Math.random()*255+1);
    const g = Math.round(Math.random()*255+1);
    const b = Math.round(Math.random()*255+1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

//membuat slide warna

//menangkap slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input',function () {
    const a = sMerah.value;
    document.body.style.backgroundColor ='rgb('+a+',100,100)';
});

sHijau.addEventListener('input',function () {
    const a = sMerah.value;
    const b = sHijau.value;
    document.body.style.backgroundColor ='rgb('+a+','+b+',100)';
});

sBiru.addEventListener('input',function () {
    const a = sMerah.value;
    const b = sHijau.value;
    const c = sBiru.value;
    
    document.body.style.backgroundColor ='rgb('+a+','+b+','+c+')';
});