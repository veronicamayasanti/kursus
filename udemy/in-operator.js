// In operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam object atau tidak
// Jika property tersebut ada di object, maka hasilnya true, sedangkan jika tidak, maka hasilnya false
// Tidak hanya di object, In juga bisa digunakan untuk mengecek index di Array

// const person = {
//     firstName: "veronica",
//     lastName: "santi"
// }

// if("firstName" in person){
//     alert(`hello ${person.firstName}`);
// }else {
//     alert(`yaaahhh`)
// }

// In operator hanya akan mengecek apakah sebuah property atau index ada atau tidak
// Jadi walaupun nilai property atau index nya undefined atau null, maka tetap akan dianggap ada


const student ={
    firstName: "veronica",
    middleName: 'maya',
    lastName: "santi"
}
 
if("middleName" in student){
    alert(`hello ${student.middleName}`);
}else {
    alert(`helo student`)
}


const names = [null, "veronica", null];
const nameResult = 0 in names;
document.writeln(`${nameResult}`);