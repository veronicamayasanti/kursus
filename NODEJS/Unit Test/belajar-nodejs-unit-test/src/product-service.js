import {getAllProduct, getProductById} from "./database.js";

export class ProductService{
    static findById(Id) {
        return getProductById
    }

    static findAll () {
        return getAllProducts()
    }
}