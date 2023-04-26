test("string.not", () => {
    const name = "veronica maya santi";

    expect(name).not.toBe("Alex");
    expect(name).not.toEqual("alex");
    expect(name).not.toMatch(/alex/);
});

test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
})