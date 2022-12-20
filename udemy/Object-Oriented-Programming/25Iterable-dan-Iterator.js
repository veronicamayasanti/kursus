// Salah satu fitur terbaru di ES6 adalah iterable
// Iterable adalah spesial object yang memiliki standarisasi
// Dengan mengikuti standarisasi Iterable, secara otomatis kita bisa melakukan iterasi terdapat data tersebut dengan menggunakan perulangan for...of
// Contoh yang sudah mengikuti standarisasi Iterable adalah string, Array, Object, dan lain - lain


class CounterIteratorResult {
    constructor(value, done) {
        this.value = value;
        this.done = done;
    }
}

class CounterIterator {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    next() {
        try {
            if (this.value > this.max) {
                return new CounterIteratorResult(this.value, true);
            }else {
                return new CounterIteratorResult(this.value, false);
            }
        } finally {
            this.value++;
        }
    }

}

class Counter {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }
    [Symbol.iterator](){
        return new CounterIterator(this.value, this.max);
    }
}

const counter = new Counter(1, 10);
for (const value of counter){
    console.log(value);
    
}