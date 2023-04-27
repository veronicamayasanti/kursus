import {sayHelloAsync} from "../src/async.js";

test("test async function", async () => {
    const result = await sayHelloAsync("maya");
    expect(result).toBe("Hello maya")
});


test("test async matchers", async () => {
    await expect (sayHelloAsync("maya")).resolve.toBe("Hello maya");
    await expect (sayHelloAsync()).rejects.toBe("name is emty");
});