function samplePromise(){
    return Promise.resolve("maya");
}

// error
// await is only valid in async functions and the top level bodies of modules 

const name = await samplePromise();
console.log(name);

