// JSON adalah singkatan dari JavaScript Object Notation
// JSON merupakan data string yang bentuknya mirip dengan avaScript Object
// digunakan untuk komunikasi antar server dan client
// JavaScript mendukung konversi data dari String ke Object ataupun sebaliknya
// JSON.stringify() digunakan untuk melakukan konversi dari Object ke String
// JSON.parse() digunakan untuk melakukan konversi string ke object

{
    const person = {
        firstName: "veronica",
        middleName: "maya",
        lastName: "wijaya",
        address: {
            country: "indonesia",
            city: "jakarta"
        },
        hobbies : [
            "coding", "eating", "traveling"
        ]
    }

    const json = JSON.stringify(person);
    console.log(json);


    const jsonObject = JSON.parse(json);
    console.log(jsonObject);
    

}



