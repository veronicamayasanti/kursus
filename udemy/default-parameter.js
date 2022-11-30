// Sekarang kita tahu bahwa parameter itu optional, artinya kita bisa tidak memberi value terhadap parameter
// Parameter juga bisa kita beri default value, artinya jika ketika kita tidak mengirim data ke parameter atau kita mengirim data undefined, maka secara otomatis parameter akan diisi oleh default value

// default parameter
function register(name, gender = "UNKNOW") {
    console.log(name);
    console.log(gender);
}

register();
register("eko");
register("eko","laki");
register("eko", undefined);
register("eko",null);