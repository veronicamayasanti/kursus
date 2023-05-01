// fitur failing function untuk membantu membuat skenario gagal memberi laporan data tidakvalid atau error


import {sayHello} from "../src/failing.js";

test("sayHello success", () => {
    expect(sayHello("maya")).toBe("Hello maya");
});

test.failing("sayHello error", () => {
    sayHello(null);
})