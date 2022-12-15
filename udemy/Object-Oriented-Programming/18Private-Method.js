// Sama seperti field, terdapat proposal juga untuk menambah fitur private method di EcmaScript
// Dengan demikian, access modifier private juga bisa digunakan di method
// Caranya sama, dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut adalah private
// Ingat fitur ini masih dalam tahapan, belum benar - benar menjadi standard EcmaScript, jadi mungkin tidak semua browser mendukung fitur ini
// https://github.com/tc39/proposal-private-methods 


class Person {

    say(name){
        if(name){
            this.#this.sayWithName(name);
        }else{
            this.#this.sayWithoutName();
        }
    }

    #sayWithoutName(){
        console.log("hello");
        
    }
    #sayWithName(name){
        console.log(`hello ${name}`);
        
    }
}

const maya = new Person();
maya.say("santi");