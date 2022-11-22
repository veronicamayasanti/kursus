// null
// null merupakan representasi data kosong
// null berbeda dengan undefined, null berarti variable sudah ditambahkan value nya, hanya saja value nya null
// Sedangkan undefined adalah variable belum ditambahkan value apapun


//null dan undefined
let firstName = null;

if (firstName === undefined){
    alert(`undefined`);
}else if(firstName === null){
    alert(`null`);
} else {
    alert(firstName);
}