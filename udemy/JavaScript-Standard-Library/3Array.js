// Tipe data Array sudah kita bahas di materi JavaScript Dasar
// Namun kita hanya membahas beberapa instance method yang ada di Array
// Sebenarnya, terdapat banyak sekali Instance Method yang ada di Array, dan kita akan coba bahas beberapa di sini
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 


// Array Loop
// Sebelumnya kita biasa menggunakan for in dan for of untuk melakukan iterasi Array, namun Array juga memiliki method yang bernama forEach()
// Method forEach bisa digunakan juga untuk melakukan iterasi data array
{
    const array = ["veronica", "maya", "wijaya"];

    array.forEach(function(value, index){
        console.log(`${index} : ${value}`);
        
    });


array.forEach((value, index) => console.log(`${index} : ${value}`));

array.forEach(value => console.log(value));

}


// Array Queue
// Dalam struktur data, terdapat tipe struktur data bernama Queue(Antrian)
// Dimana data masuk akan diposisikan di urutan paling belakang
// Sedangkan data keluar akan diposisikan dari urutan paling depan
// Mirip sekali dengan antrian, atau istilahnya FIFO(first in first out)
// Kita bisa menggunakan Array dengan bantuan function push() untuk menambah data di belakang, dan shift() untuk mengambil dan menghapus data paling depan

{
    const queue = [];

    queue.push('veronica');
    queue.push('maya');
    queue.push('wijaya');

    console.log(queue.shift());
    console.log(queue.shift());
    console.log(queue.shift());
    console.log(queue.shift());
    
}


// Array Stack
// Struktur data Stack(Tumpukan) kebalikan dari Queue, dimana aturannya mirip dengan tumpukan kartu
// Saat kita memasukkan data, kita akan memasukkan di urutan paling belakang(atau atas)
// Sedangkan saat kita mengambil data, kita akan mengambil data dari paling belakang(atau atas) terlebih dahulu
// Stack ini sifatnya LIFO(last in first out)
// Untuk menambah diurutan belakang, kita bisa menggunakan function push()
// Dan untuk mengambil dan menghapus paling belakang, kita bisa menggunakan function pop()


{
    const stack = [];

    stack.push('samantha');
    stack.push('maya');
    stack.push('wijaya');

    console.log(stack.shift());
    console.log(stack.shift());
    console.log(stack.shift());
    console.log(stack.shift());
}


// Array Search


// find(value => boolean) : value
// Mencari data sesuai dengan kondisi

// findIndex(value => boolean) : number
// Mencari data index sesuai dengan kondisi

// includes(value) : boolean
// Mengecek apakah terdapat data

// indexOf(value) : number
// Mengecek posisi index data

// lastIndexOf(value) : number
// Mengecek posisi index data terakhir


{
    const source = [1,2,3,4,5,1,2,3,4,5];

    console.log(source.find(value => value > 3));
    console.log(source.findIndex(value => value > 3));
    console.log(source.includes(7));
    console.log(source.indexOf(5));
    console.log(source.lastIndexOf(5));
    
}


// Array Filter
// filter(value => boolean) : Array
// Melakukan filter data yang kondisinya bernilai true

{
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    console.log(numbers.filter(value => value % 2 === 1));
    console.log(numbers.filter(value => value % 2 === 0));
}


// Array Transform

// map(value => result) : Array < result >
// Melakukan transform tiap value dan menghasilkan array result

// reduce(resultBefore, value => result) : result
// Melakukan transform dengan menggunakan value array dan value selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya

// reduceRight(resultBefore, value => result)
// Sama seperti reduce(), namun dilakukan dari belakang
{
const names = ["veronica", "maya", "wijaya"];
const namesUpper = names.map(value => value.toUpperCase());
console.log(namesUpper);

const namesReduce = names.reduce((before, value) => before + " " + value);
console.log(namesReduce);

const namesRight = names.reduceRight((before, value) => before + " " + value);
console.log(namesRight);

const numbers = [1,2,3,4,5,6,7,8,9,10]
    const total =numbers.reduce((before, value) => before + value);
    console.log(total);
}