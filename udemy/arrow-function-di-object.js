// Sebelumnya kita sudah bahas tentang Arrow Function
// Arrow Function juga bisa kita gunakan di sebagai Object Method
// Namun perlu diketahui, Arrow Function tidak bisa digunakan untuk mengakses arguments object, function generator, kata kunci this dan kata kunci super(dibahas di materi JavaScript Object Oriented Programming)
// Jadi pastikan gunakan Arrow Function hanya memang ketika kita tidak butuh fitur - fitur diatas

const person = {
    name: 'samantha',
    sayHello: (name) => {
        console.log(`hai hai ${name}`);
        
    }
};

person.sayHello(`alex`);