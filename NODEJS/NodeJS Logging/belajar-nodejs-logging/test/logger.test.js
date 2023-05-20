//Logger adalah sebuah object di winston yang digunakan untuk melakukan logging
//untuk membuat object logger, kita bisa menggunakan function createLogger() yang terdapat di package/module winston



import winston from "winston";

test("creat new logger", () => {
    const logger = winston.createLogger({});

    logger.log({
        level: "info",
        message: "hello logging"
    })
})