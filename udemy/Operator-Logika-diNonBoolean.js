// operator OR (||)

console.info( "hello" || "" );
console.info( "" || [] );
console.info( "0" || "nol" );
console.info( 0 || "nol" );
console.info( null || "null" );
console.info( undefined || "undefined");
console.info(0 || false);

const person = {
    firstName: "",
    lastName: "wijaya"
};

const name = person.firstName || person.lastName;
console.info(name);



// operator AND (&&)
console.info("hello" && '');
console.info( "" && [] );
console.info( "0" && "NOL" );
console.info(0 && "nol");
console.info( null && "null" );
console.info(undefined && "undefined");
console.info("undefined" && "null" );