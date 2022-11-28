// Function Parameter

// Kita bisa mengirim informasi ke function yang ingin kita panggil
// Untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument di function yang sudah kita buat
// Parameter ditempatkan di dalam kurung() di deklarasi method
// Parameter bisa lebih dari satu, jika lebih dari satu, harus dipisah menggunakan tanda koma

// membuat function dengan parameter
function sayHello(firstName, lastName) {
    document.writeln(`<p>hello ${firstName} ${lastName}</p>`);
}

//memanggil function dengan parameter
sayHello('veronica', "maya");
sayHello("geonathan", "rasmus");
