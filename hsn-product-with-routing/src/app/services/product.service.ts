import { ProductModel } from "../models/product.model";
import * as _ from 'lodash';

export class ProductService {

    get(): ProductModel[] {
        return [{ id: 1, name: 'product1', price: 1000, imageUrl: 'assets/pictures/1.png' },
        { id: 2, name: 'product2', price: 2000, imageUrl: 'assets/pictures/2.jpg' },
        { id: 3, name: 'product3', price: 3000, imageUrl: 'assets/pictures/3.jpg' },
        { id: 4, name: 'product4', price: 4000, imageUrl: 'assets/pictures/4.jpg' }]
    }

    getById(id: number): ProductModel {
      
        let products: ProductModel[] = [{ id: 1, name: 'product1', price: 1000, imageUrl: 'assets/pictures/1.png' },
        { id: 2, name: 'product2', price: 2000, imageUrl: 'assets/pictures/2.jpg' },
        { id: 3, name: 'product3', price: 3000, imageUrl: 'assets/pictures/3.jpg' },
        { id: 4, name: 'product4', price: 4000, imageUrl: 'assets/pictures/4.jpg' }];
        
        return _.find(products, c => c.id === id);
    }
}