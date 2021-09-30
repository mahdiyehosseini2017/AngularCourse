import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductModel = new ProductModel();
  constructor(private route: ActivatedRoute, private productService: ProductService, private shoppingCartService: ShoppingCartService) {

  }

  ngOnInit() {
    this.product = this.productService.getById(this.id);
  }

  get id(): number {
    let i = 0;
    this.route.params.subscribe(params => {
      i = Number(params['id']);
    });

    return i;
  }

  addToShoppingCart() {
    this.shoppingCartService.add(this.product);
  }

}
