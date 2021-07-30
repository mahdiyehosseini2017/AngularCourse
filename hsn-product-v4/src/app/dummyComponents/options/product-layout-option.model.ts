import { ProductModel } from "src/app/models/product.model";
import { SortDirectionEnum } from "src/app/tools/enums/sort-direction.enum";

export class ProductLayoutOptionModel {
    products: ProductModel[];
    direction: SortDirectionEnum;
    searchToken: string;
}