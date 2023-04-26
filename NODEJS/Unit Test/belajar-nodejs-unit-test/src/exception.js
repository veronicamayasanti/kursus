export class MyExceptio extends Error {

}

export const callMe = (name) => {
    if (name === "maya") {
        throw new MyExceptio ("Ups my exceptions happens")
    } else {
        return "OK"
    }
};