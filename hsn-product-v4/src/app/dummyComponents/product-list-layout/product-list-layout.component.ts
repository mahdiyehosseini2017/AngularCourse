import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductLayoutOptionModel } from '../options/product-layout-option.model';
import { ProductLayoutModel } from '../options/product-layout.model';

@Component({
  selector: 'app-product-list-layout',
  templateUrl: './product-list-layout.component.html',
  styleUrls: ['./product-list-layout.component.css']
})
export class ProductListLayoutComponent extends ProductLayoutModel implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
