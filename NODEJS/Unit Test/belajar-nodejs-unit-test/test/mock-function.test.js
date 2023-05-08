import {calculate} from "../src/sum.js";

test("test calculate", () => {
    const callback = jest.fn();

    calculate([10,10,10], callback);
    calculate([10,10,10,10,10], callback);

    expect(callback.mock.calls.length).toBe(30);

    console.log(callback,mock.calls);

    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);
})