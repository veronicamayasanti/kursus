{
    // object freezer da seal

    const person = {
        firstName: "veronica",
        lastName: "wijaya"
    };

    //Object.freeze(person);
    Object.seal(person);

    person.firstName = "samantha";
    person.middleName = "maya"
    delete person.lastName;

    console.log(person);
    
}


{
    // object assign
    
    const target = {
        firstName: "veronica"
    };

    const source = {
        lastName: "wijaya"
    };

    Object.assign(target, source);
    console.log(target);
    console.log(source);
    
}


{
    // object property name dan value

    const person = {
        firstName: "veronica",
        lastName: "wijaya"
    };

    console.log(Object.values(person));
    console.log(Object.getOwnPropertyNames(person));
    
    
    
}