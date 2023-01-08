// Proxy
// Proxy adalah fitur yang bisa digunakan sebagai wakil sebuah data
// semua interaksi ke data akan selalu melalui Proxy terlebih dahulu
// kita bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju

// Proxy Handler
// Pembuatan Proxy perlu menggunakan handler, dimana dalam handler, kita bisa membuat function yang dinamakan interceptor yang digunakan ketika mengambil data atau mengubah data ke target
// untuk membuat Proxy, kita bisa menggunakan new Proxy(target, handler)

{
    const target = {
        middleName : "samantha"
    };

    const handler = {
        get: function (target, property) {
            console.log(`Access property : ${property}`);
            
            return target[property];
        },
        set: function(target, property, value) {
            console.log(`change property ${property} : ${value}`);
            if(value == null){
                target[property] == "";
            }else {
                target[property] = value
            }
        }
    };

    const proxy = new Proxy(target, handler)
    proxy.firstName = "maya";
    proxy.lastName = "null";


    console.log(proxy.firstName);
    console.log(proxy.middleName);
    console.log(proxy.lastName);
    console.log(target);
    

}


// Proxy dan Handler
// saat kita merubah data proxy, secara otomatis data akan dikirim ke target melalui handler dengan memanggil function set(target, property, value)
// saat kita memanggil data proxy, secara otomatis data akan diambil dari target melalui handler dengan memanggil function get(target, property)
// artinya, jika kita ingin melakukan sesuatu sebelum dan setelahnya, bisa kita lakukan di handler


