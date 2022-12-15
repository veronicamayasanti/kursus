// Operator instanceof
// Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
// Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah “object”
// Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan

class Employee {

}

class Manager extends Employee{

}

 const maya = new Employee();
 const santi = new Manager();
 console.log(typeof maya);
 console.log(typeof santi);

 console.log(maya instanceof Employee);
console.log(maya instanceof Manager);
 
console.log(santi instanceof Employee);
console.log(santi instanceof Manager);
 


// Operator instanceof di Class Inheritance
// Operator instanceof mendukung class inheritance, artinya instanceof juga bisa digunakan untuk mengecek, apakah sebuah object adalah instance dari class tertentu, atau turunan dari class tertentu?
