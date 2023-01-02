// JavaScript memiliki tipe data untuk represenTASIKAN waktu dan tanggal, yaitu Date
// Date merupakan representasi milisecond sejak tangal 1 januari 1970, atau dikenal dengan Epoch dan Unix Timestamp

// membuat Object Date
{
    // membuat date saat ini
    const date1 = new Date();
    console.log(date1);
    

    // membuat date dengan tanggal
    const date2 = new Date(2020, 10, 10);
    console.log(date2);
    

    // membuat date dengan parameter sampai milis
    const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
    console.log(date3);
}


// Epoch dan Unix Timestamp
// dalam menggunakan tipe data waktu disemua bahasa pemograman akan mendukung epoch dan unix timestamp
// Epoch dan Unix timestamp merupakan hitungan milisecond setelah tanggal 1 januari 1970
// untuk mengubah dari object date ke epoch dan nunix timestamp, kita bisa menggunakan function getTime()

{

    // membuat date saat ini
    const date1 = new Date();
    console.log(date1.getTime());


    // membuat date dengan tanggal
    const date2 = new Date(2020, 10, 10);
    console.log(date2.getTime());


    // membuat date dengan parameter sampai milis
    const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
    console.log(date3.getTime());

    console.log(Date.now);
    
}


// Parsing Date
// melakukan parsing membuat date dari string menggunakan method Date.parse(value)
// format string harus YYYYY-MM-DDTHH:mm:ss.sssZ
//hasil parsing adalah unix timestamp, bukan object date

{
    const time = Date.parse("2020-10-10T08:45:45.123+07:00");
    console.log(time);

    const date = new Date(time);
    console.log(date);
    
}


// getter dan stter
 {
     const date = new Date();
     console.log(date.getFullYear());
    console.log(date.getMonth());
    console.log(date.getDate());
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(date.getMilliseconds());
    console.log(date.getTimezoneOffset());
 }