// Nullish Coalescing Operator

// Nullist value adalah null dan undefined
// Nullist coalescing operator(??) adalah operator mirip dengan ternary operator, yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru value default nya diambil

// Tanpa Nullish Coalescing Operator

// let parameter;

// let data = parameter;
// if (data === undefined || data == null){
//     data = 'nilai default';
// }

// alert(data);


// Nullish Coalescing Operator

let parameter;
let data = parameter ?? "nilai default";
alert(data);