// Tidak ada batasan dimana kita bisa membuat function
// Termasuk jika kita ingin membuat function di dalam sebuah function, kita bisa melakukannya
// Function yang terdapat di dalam, kita sebut inner function
// Inner function hanya bisa diakses di tempat kita membuat function nya, tidak bisa diakses dari luar function nya

// function di dalam function
function outer() {
    function inner() {
        console.log(`inner`);
        
    }
    inner();
}
outer();