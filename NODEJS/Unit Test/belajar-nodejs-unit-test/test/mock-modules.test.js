import {ProductService} from "../src/product-service.js";
import {getProductById} from "../src/database.js";


jest.mock("../src/database.js");

test("mock modules getProductById", () => {
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "Product Mock"
    }

    });

    const product = ProductService.findById(1)

    expect(product).toEqual({
        id: 1,
        name: "product mock"
    })
})


test("moct modules getAllProduct", () => {
    const products = [
        {
            id: 1,
            name: "product mock"
        },
        {
            id: 2,
            name: "product mock"
        }
    ]

    getAllProducts.mockImplementation(() => {
        return products;
    })
    expect(ProductService.findAll()).toEqual(products);
});