// RexExp merupakan implemntasi dari reguler expression di JAvaScript
// Regular Expression merupakan fitur untuk mencari text dengan pola
// Membuat reguler expression di JavaScript bisa dilakukan dengan dua cara, yaitu menggunakan literal notation atau membuat object RegExp

// membuat regex
 
{
    const regex1 = /maya/;
    const regex2 = new RegExp("maya");
    const regex3 = new RegExp(/maya/);
}


// RegExp Instance Method
//  exec(value) : result 
// eksekusi regex, jika menemukan data sesuai pola, maka kembalikan resultnya, jika tidak maka null

// test(value) : boolean
// eksekusi regex, jika menemukan data sesuai pola, maka return true, jika tidak maka false

{
    const name = "maya veronica maya wijaya";
    const regex = /maya/;

    const result = regex.exec(name);
    console.log(result);
    console.log(regex.exec("tidak ada"));
     


    const test = regex.test(name);
    console.log(test);
    console.log(regex.test("tidak ada"));
    
}


// RegExp Modifier
// RegExp memiliki modifier untuk mengubah sifat cara pencarian
// modifier i untuk RegExp menjadi incase sensitive
// g untuk pencarian dilakukan secara global, secara default setelah menemukan data, pencarian akan berhenti
//  m untuk multiline, pencarian dilakukan di tiap baris (enter)

{
    const name = "maya veronica\n maya Veronica \n maya wijaya";
    const regex1 = /maya/g
    const regex2 = /veronica/ig

    let result;
    while((result = regex1.exec(name)) !== null) {
        console.log(result); 
    }

    while ((result = regex2.exec(name)) !== null) {
        console.log(result);
}

}


// fitur RegExp
// Assersions: indikasi awal dan akhir teks
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
// Character Classes: membedakan antara huruf dan angka
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character
// _Classes
// Group dan Range: melakukan grouping atau range huruf atau angka
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_a
// nd_Ranges
// Quantifiers: menentukan jumlah huruf atau angka
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifie


{

const regex6 = /ek[ioaeu]/ig

const name = "eko eki eka eku eke edo eko eki";
    let result3;
    while ((result3 = regex6.exec(name)) !== null) {
        console.log(result3);
        
    }
}

{

    const name = "eko eki eka eku eke edo eko eki";
 
    
}