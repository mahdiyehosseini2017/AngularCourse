import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductLayoutOptionModel } from '../options/product-layout-option.model';
import { ProductLayoutModel } from '../options/product-layout.model';

@Component({
  selector: 'app-product-list-layout',
  templateUrl: './product-list-layout.component.html',
  styleUrls: ['./product-list-layout.component.css']
})
export class ProductListLayoutComponent extends ProductLayoutModel implements OnInit {

constructor(productService: ProductService, shoppingCartService: ShoppingCartService){
  super(productService, shoppingCartService);
}

  ngOnInit() {
  }

}
