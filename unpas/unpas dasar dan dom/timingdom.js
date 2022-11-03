//setTimeout()
//setInterval()

/*
const tes = setTimeout(function () {
    console.log('okeee')
}, 5000)

const tombol = document.getElementById('tombol;');
tombol.addEventListener('click',function () {
    clearTimeout(tes);
    console.log('selesai');
});
*/


// setInternal()
/*
const tes = setInterval(function () {
    console.log('okeeee');
}, 2000);

const tombol = document.getElementById('tombol;');
tombol.addEventListener('click',function () {
    clearInterval(tes);
    console.log('selesai');
});
*/


//program hitung mundur

const tanggalTujuan = new Date('oct 18, 2022 00:26:00').getTime();

const hitungMundur = setInterval(function () {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000*60*60*24) / (1000*60*60));
    const menit = Math.floor(selisih % (1000*60*60) / (1000*60));
    const detik = Math.floor(selisih % (1000*60) / 1000);


    const teks = document.getElementById('teks');
    teks.innerHTML = `waktu anda sisa ${hari} hari ${jam} jam ${menit} menit ${detik} detik lagi!!!`

    if (selisih < 0){
        clearInterval(hitungMundur);
        teks.innerHTML = `waktu anda habis`
    }

}, 1000);

