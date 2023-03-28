import readline from "readline";
import process  from "process";

const input = readline.createInterface( {
    input : process.stdin,
    output : process.stdout,
});

input.question("siapa nama anda?", (nama) => {
    console.log(`halo ${nama}`);
    input.close();
});