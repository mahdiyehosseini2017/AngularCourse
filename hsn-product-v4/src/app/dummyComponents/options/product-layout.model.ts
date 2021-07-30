import { EventEmitter, Input, Output } from "@angular/core";
import { ProductModel } from "src/app/models/product.model";
import { ProductLayoutOptionModel } from "./product-layout-option.model";

export abstract class ProductLayoutModel {
    @Input() options: ProductLayoutOptionModel;

    @Output() addToShoppingCart = new EventEmitter<ProductModel>();

    reportAddToShoppingCart(product: ProductModel) {
        this.addToShoppingCart.emit(product);
    }
}