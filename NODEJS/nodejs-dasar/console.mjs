import {Console} from "console";
import fs from "fs";

const logFile = fs.createWriteStream("application.log");

const log = new Console({
    stdout: logFile,
    stderr: logFile
})

log.info("Hello world");
log.error("ups");

const person = {
    firstName: "maya",
    lastName: "wijaya"
}

log.table(person);