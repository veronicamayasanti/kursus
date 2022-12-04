// Kata kunci this adalah referensi ke object milik siapa
// Tiap lokasi kata kunci this, bisa berbeda - beda referensi pemilik nya
// Dalam Object Method, this merupakan referensi ke object pemilik function nya
// Di global scope, this merupakan referensi ke global object(di browser biasanya Window)
// Dalam function, this merupakan referensi ke global object(di browser biasanya Window)
// Di function dengan strict mode(akan dibahas nanti), this adalah undefined
// Dalam event, this merupakan referensi ke element yang menerima event(dibahas di materi Document Object Model)


// this di global scope
console.info(this);


//this di function
function sample(){
    console.log(this);
    
}

sample();

// this di dalam 