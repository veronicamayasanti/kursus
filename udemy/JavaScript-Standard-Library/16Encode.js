// saat kita menulis URL, kadang kita ingin menambahkan informasi tambahan seperti query parameter
// URL sudah memeiliki standar encode penulisan URLnya
// Standar encoding ini dilakukan agar penulisan URL aman informasi URL tidak berubah ketika diterima oleh server
// contohnya walaupun kta bisa mengirim spasi dalam url, tapi disarankan untuk encode agar nilai spasi tidak benar-benar terlihat seperti spasi pada URL nya

// contoh masalah jika tidak menggunakan Encode
// misal ada quey parameter dengan nama data, lalu kita ingin mengirim nilai kesana
// misal nilainya adalah &eko=eko& alhasil URL nya akan seperti berikut
// http://contoh.com?data=&eko=eko&
// URL diatas terlihat tidak ada masalah, tapi sebenarnya ketika diterima oleh server, parameter data bernilai kosong, karena & dianggap sebagai pemisah antara parameter
// arti tanda seperti & dan lain lain perlu di encode, agar todak terjadi kesalahan data yang kita kirim


// Encode Function
// keterangan

// encodeURI(value) 
// melakukan encode value, namun karakter yang dipesan di URI tidak akan diubah ;,/?:@&=+$#

// encodeURIComponent(value)
// melakukan encode value semua karakter

// decodeURI(encoded)
// melakukan decode value hasil encodeURI()

// decodeURIComponent(encoded)
// melakukan decode value hasil encodeURIComponent()


// kode : encodeURI dan decodeURI

{
    const url = "http://contoh.com/?name=maya wijaya";
    console.log(url);

    const encoded = encodeURI(url);
    console.log(encoded);

    const decoded = decodeURI(encoded)
    console.log(decoded);
    
}


{
    const value = "veronica&maya=wijaya";
    const url = "http://contoh.com/?name=";
    console.log(url + value);

    const encoded = encodeURIComponent(value);
    console.log(url + encoded);

    const decoded = decodeURIComponent(encoded)
    console.log(url + decoded);
    
}