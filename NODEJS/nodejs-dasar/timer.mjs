// timer merupakan standar library untuk melakukan scheduling
// function di Timer terdapat di globals
// semua function Timer menggunakan Callback

// class immediate adalah sebuah scheduling yang langsung diekseskusi saat itu juga dalam bentuk asyncronus
// class TimeOut didelay berapa lama baru di eksekusi callbacknya
// setInterval() akan lakukan berkali kali sesuai dengan interval waktunya

// versi call back

    setInterval( () => {
    console.log(`star time at ${new Date()}`);
}, 1000);



    
