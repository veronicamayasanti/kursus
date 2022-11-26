// Falsy dan Truthy
// Falsy
// Falsy atau kadang ditulis falsey, adalah value yang ketika dalam konteks boolean, dia dianggap false
// Ini adalah salah satu fitur unik dari JavaScript, yang berguna, namun kadang juga sering membingungkan
// Jadi di JavaScript, kondisi itu tidak hanya bisa boolean, tapi diluar boolean pun bisa, namun kita harus tahu beberapa data falsy, atau dianggap false

// Truthy
// Truthy adalah kebalikan dari falsy, dimana data nya dianggap bernilai true
// Sederhana sekali sebenarnya untuk mengetahui sebuah data itu adalah truthy, yaitu data yang bukan bernilai falsy 

let data = -2;
if (data) {
    alert("true");
}else {
    alert("false");
}