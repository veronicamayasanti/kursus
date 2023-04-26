import {callMe, MyExceptio} from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("maya").toThrow());
    expect(() => callMe("maya").toThrow(MyExceptio));
    expect(() => callMe("maya").toThrow("Ups my exceptions happens"));


})