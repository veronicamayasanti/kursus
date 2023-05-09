import {getBalance} from "../src/async.js";

test("mock async function", async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000);

    await expect(getBalance("maya", from)).resolves.toEqual({
        name: "maya",
        balance: 1000
    })

    expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolve.toBe(1000);
});




test.failing("mock async function rejected", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("ups"));

    await getBalance("maya", from);
});


test("mock async function error matchers", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("rejected"));

    await expect(getBalance("maya", from)).rejects.toBe("rejected");
});
