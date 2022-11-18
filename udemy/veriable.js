// variable
/*
Variable adalah tempat untuk menyimpan data
Dengan menyimpan data di variable, kita bisa menggunakannya lagi dengan menyebutkan nama variable nya
Untuk membuat variable di JavaScript, kita bisa menggunakan kata kunci var diikuti dengan nama variable nya
JavaScript adalah dynamic language, artinya variable di JavaScript tidak terpaku harus menggunakan satu tipe data, kita bisa mengubah-ubah tipe data di variable yang sama
*/

// nama variable tidak boleh ada space nya harus satu kata

// contoh
var fullName;
var firstName;
var middleName;
var lastName;



//Mengubah Value di Variable
/*
Setelah variable di deklarasikan, kita bisa mengubah value atau nilai di dalam variable tersebut
Untuk mengubahnya, kita bisa menggunakan perintah nama variable diikuti dengan tanda = (sama dengan) lalu diikuti dengan value atau nilai nya
*/
 fullName = "veronica maya santi";
 firstName = "veronica";
 middleName = "maya";
 lastName = "santi";
 lastName = "wijaya";
 


 //Membuat Variable Langsung Dengan Value
/*
Di JavaScript juga kita bisa mendeklarasikan sebuah variable, langsung dengan isi value nya
Caranya kita bisa menggunakan kata kunci var, diikuti nama variable, lalu diikuti dengan tanda = (sama dengan), dan di ikuti dengan value atau nilai nya
*/

/*
Mengakses Variable
Salah satu keuntungan menggunakan variable adalah variable bisa digunakan kembali
Hal ini akan mempermudah ketika membutuhkan data yang sama berkali-kali
Untuk mengakses variable, kita cukup menyebutkan nama variable nya
*/

document.writeln(fullName);
document.writeln("</br>");
document.writeln(lastName);

/*
Kata Kunci let dan const
Sebelum tahun 2015, kata kunci untuk membuat variable hanya bisa menggunakan kata kunci var
Namun tahun 2015 sejak versi ECMAScript 2015, diperkenalkan kata kunci baru untuk membuat variable, let dan const
JavaScript sekarang tidak direkomendasikan lagi menggunakan kata kunci var untuk membuat variable, namun diganti dengan let,

Kata kunci let itu seperti kata kunci var, dimana data di variable tersebut bisa diubah-ubah sesuka kita
Sedangkan kata kunci const berbeda, ketika sebuah variable sudah diisi di variable const, maka variable tersebut tidak bisa diubah lagi value nya
Variable sejenis ini kadang dibilang juga constant
*/