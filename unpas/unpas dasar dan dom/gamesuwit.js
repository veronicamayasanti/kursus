// menangkap pilihan layar
let pemain = prompt('masukan pilihan : gajah / semut / orang : ');


let tanya = true;
while (tanya) {
// menangkap pilihan computer
// membangkitkan bilangan random
    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    console.log(comp);

// menentukan rules
    let hasil = '';
    if (pemain == comp) {
        hasil = 'SERI';
    } else if (pemain == 'gajah') {
        if (comp == 'orang') {
            hasil = 'MENANG';
        } else {
            hasil = ' KALAH';
        }
    } else if (pemain == 'orang') {
        if (comp == 'gajah') {
            hasil = 'KALAH';
        } else {
            hasil = 'MENANG';
        }
    } else if (pemain == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukan pilihan yang salah';
    }


// tampilkan hasilnya

    alert(`kamu memilih : ${pemain} dan komputer memilih ${comp} \n Maka hasilnya: kamu ${hasil}`);

    tanya = confirm(`lagi?`);
}

alert(` terimaksih sudah main`);