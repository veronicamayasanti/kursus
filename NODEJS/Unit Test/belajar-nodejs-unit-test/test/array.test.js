test("array simple", () => {
    const names = ["veronica", "maya", "santi"];
    expect(names).toEqual(["veronica", "maya", "santi"]);
    expect(names).toContain("maya");
});

test("array object", () => {
    const persons = [
        {
            name: "maya"
        },
        {
            name: "santi"
        }
    ];

    expect(persons).toContainEqual({
        name: "maya"
    });
});

