import {getAllProducts, getProductById} from "../src/database.js";
import {ProductService} from "../src/product-service.js";

jest.mock("../src/database.js", () => {
    const original = jest.requireActual("../src/database.js");

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn();
    }
});