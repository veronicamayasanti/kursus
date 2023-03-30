// zlib adalah standar library yang digunakan untuk melakukan kompresi menggunakan Gzip

import zlib from "zlib";
import fs from "fs";

const sourse = fs.readFileSync("zlib.mjs");
const result = zlib.gzipSync(sourse);

fs.writeFileSync("zlib.mjs.txt", result);