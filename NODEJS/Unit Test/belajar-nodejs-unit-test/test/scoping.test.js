beforeAll(() => console.log("before all outer"));
afterAll(() => console.log("after all outer"));
beforeEach(() => console.log("before each outer"));
afterAll(() => console.log("after each outer"));

test("test outer", () => console.log("test outer"));

describe("inner", () => {

    beforeEach(() => console.log("before each inner"));
    afterEach(() => console.log("after each inner"));

    test("test inner", () => console.log("test inner"))
});