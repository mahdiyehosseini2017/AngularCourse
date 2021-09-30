import { ProductModel } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";
import { ShoppingCartService } from "src/app/services/shopping-cart.service";
import { ProductLayoutOptionModel } from "./product-layout-option.model";

export abstract class ProductLayoutModel {
    options: ProductLayoutOptionModel = new ProductLayoutOptionModel();

    constructor(private productService: ProductService,
        private shoppingCartService: ShoppingCartService) {
        this.options.products = productService.get();
    }

    addToShoppingCart(product: ProductModel) {
        this.shoppingCartService.add(product);
    }
}