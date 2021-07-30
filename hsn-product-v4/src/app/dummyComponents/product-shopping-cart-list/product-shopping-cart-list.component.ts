import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ShoppingCartModel } from 'src/app/models/shopping-cart.model';

@Component({
  selector: 'app-product-shopping-cart-list',
  templateUrl: './product-shopping-cart-list.component.html',
  styleUrls: ['./product-shopping-cart-list.component.css']
})
export class ProductShoppingCartListComponent implements OnInit {
  @Input() shoppingCartList: ShoppingCartModel;
  @Input() totalPrice: number;

  @Output() removeFromCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit() {
  }

  reportRemoveFromCart(item: ProductModel) {
    this.removeFromCart.emit(item);
  }

}
