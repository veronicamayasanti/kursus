// secara defualt, parameter di function itu optional
// ketika memanggil function tidak wajib mengisi value
// Jika tidak ada value yang kita kirim ke parameter ketika memanggil function, maka secara otomatis parameter tersebut bernilai undefined

// function optional paramter
function sayHello(firstName, middleName, lastName) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

sayHello();
sayHello('veronica')
sayHello('veronica','maya');
sayHello('veronica','maya','wijaya')
sayHello('veronica','maya','wijaya','michelina')