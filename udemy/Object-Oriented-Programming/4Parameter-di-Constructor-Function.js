// Karena dalam JavaScript, class adalah berbentuk function, jadi secara default, function tersebut bisa memiliki parameter
// Constructor function sama seperti function biasanya, bisa memiliki parameter, hal ini membuat ketika kita membuat object, kita bisa mengirim langsung data lewat parameter di constructor function tersebut


function Person(alamat, hobi) {
    this.alamat = alamat;
    this.hobi = hobi;
    this.sayHello = function (nama) {
        console.log(`hallo namaku ${nama}, aku hobi ${this.hobi}`);
    }
}

const maya = new Person("sidodadi", "makan");
maya.sayHello("maya");

console.log(maya);
