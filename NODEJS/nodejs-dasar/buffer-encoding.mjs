const buffer = Buffer.from("veronica maya wijaya", "utf8");

console.log(buffer.toString());
console.log(buffer.toString("hex"));
console.log(buffer.toString("base64"));

const bufferBase64 = Buffer.from("dmVyb25pY2EgbWF5YSB3aWpheWE=", "base64");
console.log(bufferBase64.toString("utf8"));