import { ProductModel } from "../models/product.model";
import { ShoppingCartModel } from "../models/shopping-cart.model";
import * as _ from 'lodash';


export class ShoppingCartService {
    items: ShoppingCartModel[] = [];

    add(product: ProductModel) {
        let item = _.find(this.items, c => c.product.id === product.id);
        if (!item) {
            this.items.push({ product: product, count: 1 });
        } else {
            item.count++;
        }
    }

    remove(product: ProductModel) {
        this.items = _.filter(this.items, c => c.product.id != product.id);
    }

    getTotalPrice(): number {
        return _.sum(this.items.map(c => c.count * c.product.price));
    }

}