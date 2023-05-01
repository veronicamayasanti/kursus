export const sayHello = (name) => {
    if (name) {
        return `hello ${name}`
    }else {
        throw new Error("Name is required");
    }
};