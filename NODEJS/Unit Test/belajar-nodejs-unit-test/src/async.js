export const sayHelloAsync = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name){
                resolve(`hello ${name}`)
            }else {
                reject("name is emty")
            }
        }, 1000);
    })
}


export const getBalance = async (name, from) => {
    const balance - await from();
    return {
        name: name,
        balance: balance
    };
};