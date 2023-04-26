test("string", () => {
    const name = "veronica maya santi";

    expect(name).toBe("veronica maya santi");
    expect(name).toMatch(/ica/);
})