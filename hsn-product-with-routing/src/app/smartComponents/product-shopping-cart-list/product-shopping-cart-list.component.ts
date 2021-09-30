import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ShoppingCartModel } from 'src/app/models/shopping-cart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-shopping-cart-list',
  templateUrl: './product-shopping-cart-list.component.html',
  styleUrls: ['./product-shopping-cart-list.component.css']
})
export class ProductShoppingCartListComponent implements OnInit {

   constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  removeFromCart(item: ProductModel) {
    this.shoppingCartService.remove(item);
  }

  get totalPrice(): number {
    return this.shoppingCartService.getTotalPrice();
  }

  get shoppingCartList(): ShoppingCartModel[] {
    return this.shoppingCartService.items;
  }

}
