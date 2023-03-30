import zlib from "zlib";
import fs from "fs";

const sourse = fs.readFileSync("zlib.mjs.txt");
const result = zlib.unzipSync(sourse);
console.log(result.toString());