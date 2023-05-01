import {sayHelloAsync} from "../src/async.js";

test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("maya")).resolve.toBe("Hello maya");
});

test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("maya")).resolve.toBe("Hello maya");
});

test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("maya")).resolve.toBe("Hello maya");
});