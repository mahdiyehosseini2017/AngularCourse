import { Component, OnInit } from '@angular/core';
import { ProductLayoutOptionModel } from 'src/app/dummyComponents/options/product-layout-option.model';
import { ProductNavbarOptionModel } from 'src/app/dummyComponents/options/product-navbar-option.model';
import { ProductModel } from 'src/app/models/product.model';
import { ShoppingCartModel } from 'src/app/models/shopping-cart.model';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { LayoutEnum } from 'src/app/tools/enums/layout.enum';
import { SortDirectionEnum } from 'src/app/tools/enums/sort-direction.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  navbarOption: ProductNavbarOptionModel;
  products: ProductModel[];

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) {
    this.navbarOption = { direction: SortDirectionEnum.Ascending, layout: LayoutEnum.Tile, searchToken: '' };
    this.products = productService.getAll();
  }

  ngOnInit() {
  }

  addToCart(product: ProductModel) {
    this.shoppingCartService.add(product);
  }

  getShoppingCart(): ShoppingCartModel[] {
    return this.shoppingCartService.items;
  }

  removeFromCart(product: ProductModel) {
    this.shoppingCartService.remove(product);
  }

  getShoppingCartTotalPrice(): number {
    return this.shoppingCartService.getTotalPrice();
  }

}
