// Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value
// Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function nya.
// Dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin kita hasilkan.
// Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa menggunakan Array sebagai return value nya

// function return value
// membuat function dengan parameter dan return value
function sayHello(firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}

// memanggil function dan menangkap return value nya
const result = sayHello("veronica", "maya");
document.writeln(`<p>${result}</p>`);

// function return value lebih dari satu
function getFinalValue(value) {
    if (value > 90) {
        return "A";
    }else if (value > 80){
        return "B"
    } else if (value > 70) {
        return "C"
    } else if (value > 60) {
        return "D"
    } else {
        return "E"
    }
}

const finalValue = getFinalValue(65);
document.writeln(`<p>${finalValue}</p>`)


// Menghentikan Eksekusi dengan Return
// Saat kita menggunakan kata kunci return, maka kode setelah return tersebut tidak akan dieksekusi
// Kita bisa menggunakan return untuk menghentikan eksekusi sebuah function


//menghentikan eksekusi dengan return
function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
        
    }
    return false
}

const array = [1,2,3,4,5,6,7,8,9,];
const search = 3;
const found = isContains(array, search);
document.writeln(`<p>${found}</p>`)