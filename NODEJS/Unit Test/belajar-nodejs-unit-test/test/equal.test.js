test("test toBe", () => {
    const name = "Eko";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Eko');
});

test("test toEqual", () => {
    let person = {id: "eko1"};
    object.assign(person, {name: "Eko6"});

    expect(person).toEqual({id: "eko", name: "Eko"});
})