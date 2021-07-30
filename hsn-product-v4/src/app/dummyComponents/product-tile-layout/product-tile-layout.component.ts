import { Component, OnInit } from '@angular/core';
import { ProductLayoutModel } from '../options/product-layout.model';

@Component({
  selector: 'app-product-tile-layout',
  templateUrl: './product-tile-layout.component.html',
  styleUrls: ['./product-tile-layout.component.css']
})
export class ProductTileLayoutComponent extends ProductLayoutModel implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
