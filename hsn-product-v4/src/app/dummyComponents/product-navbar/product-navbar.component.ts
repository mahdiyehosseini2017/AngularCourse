import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutEnum } from 'src/app/tools/enums/layout.enum';
import { SortDirectionEnum } from 'src/app/tools/enums/sort-direction.enum';
import { ProductNavbarOptionModel } from '../options/product-navbar-option.model';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {

  @Input() options: ProductNavbarOptionModel;

  @Output() layoutChanged = new EventEmitter<LayoutEnum>();
  @Output() directionChanged = new EventEmitter<SortDirectionEnum>();
  @Output() searchTokenChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  reportLayoutChanged() {
    if (this.options.layout === LayoutEnum.List) {
      this.options.layout = LayoutEnum.Tile;
    } else {
      this.options.layout = LayoutEnum.List;
    }

    this.layoutChanged.emit(this.options.layout);
  }

  reportDirectionChanged() {
    if (this.options.direction === SortDirectionEnum.Ascending) {
      this.options.direction = SortDirectionEnum.Descending;
    } else {
      this.options.direction = SortDirectionEnum.Ascending;
    }

    this.directionChanged.emit(this.options.direction);
  }

  reportSearchTokenChanged(e) {
    this.searchTokenChanged.emit(e.target.value);

  }

}
