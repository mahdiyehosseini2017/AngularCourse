import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductLayoutOptionModel } from '../options/product-layout-option.model';
import { ProductLayoutModel } from '../options/product-layout.model';

@Component({
  selector: 'app-product-tile-layout',
  templateUrl: './product-tile-layout.component.html',
  styleUrls: ['./product-tile-layout.component.css']
})
export class ProductTileLayoutComponent extends ProductLayoutModel implements OnInit {

  constructor(productService: ProductService, shoppingCartService: ShoppingCartService) {
    super(productService, shoppingCartService);
   }

  ngOnInit() {
  }

}
