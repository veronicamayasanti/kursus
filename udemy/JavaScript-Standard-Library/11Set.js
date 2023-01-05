//  Set
// Set merupakan implementasi dari struktyr data yang berisikan data - data unique 
// set mirip seperti Array, hanya saja isi datanya unique
// jika kita menambahkan data yang sama, maka data hanya akan diterima satu saja
// set mengimplemetasikan kontrak iterable, sehingga bisa diiterasi secara default

{
    const set = new Set()

    set.add("Maya");
    set.add("Maya");
    set.add("veronica");
    set.add("wijaya");

    console.log(set);
    
    set.forEach((value) => console.log(value));
}