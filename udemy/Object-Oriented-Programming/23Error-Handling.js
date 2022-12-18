// Saat terjadi error di kode program JavaScript, kadang kita tidak ingin program kita berhenti
// Di JavaScript, kita bisa menangkap jika terjadi error
// Kita bisa menggunakan try catch statement untuk menangkap error
// Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch
// Jika tidak terjadi error, block catch tidak akan dieksekusi



class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new Error(`total parameter harus lebih dari 0`)
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }

}
try {
    console.log(MathUtil.sum());
    console.log("maya");
} catch (error) {
    console.log(`terjadi error : ${error.message}`);
    
}finally {
    console.log("program selesai");
    
}

console.log("veronica");


// Kata Kunci finally
// Kadang kita ingin melakukan sesuatu entah itu terjadi error ataupun tidak
// Dalam try catch, kita bisa menambahkan block finally
// Block finally ini akan selalu dieksekusi setelah try catch selesai, entah terjadi error atau tidak, block finally akan selalu dieksekusi


// Try Finally
// Kata kunci finally juga bisa digunakan tanpa perlu menggunakan catch 
// Biasanya ini digunakan dalam kasus tertentu

class Counter {
    #counter = 0;

    next(){
        try {
            return this.#counter;
        }finally {
            this.#counter++;
        }
    }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());