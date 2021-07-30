import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";
import { LogService } from "./log/log.service";

@Injectable()
export class ProductService {
    constructor(private logService: LogService) {

    }

    getAll(): ProductModel[] {
        this.logService.saveLog();
        return [{ id: 1, name: 'product1', price: 1000, imageUrl: 'assets/pictures/1.png' },
        { id: 2, name: 'product2', price: 2000, imageUrl: 'assets/pictures/2.jpg' },
        { id: 3, name: 'product3', price: 3000, imageUrl: 'assets/pictures/3.jpg' },
        { id: 4, name: 'product4', price: 4000, imageUrl: 'assets/pictures/4.jpg' }]

    }
}