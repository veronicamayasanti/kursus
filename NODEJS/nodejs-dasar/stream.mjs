// stream adalah standar library untuk kontrak aliran data di NodeJS
// stream bisa jadi object yang bisa dibaca atau bisa di tulis dan stream adlah turunan dari EventEmitter

import fs from 'fs';

const writer = fs.createWriteStream("target.log");

writer.write("veronica\n");
writer.write("maya\n");
writer.write("wijaya\n");
writer.end()


// coba dibaca lewat nodejs


const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});