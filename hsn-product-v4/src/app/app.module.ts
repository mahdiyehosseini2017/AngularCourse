import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './smartComponents/product/product.component';
import { ProductNavbarComponent } from './dummyComponents/product-navbar/product-navbar.component';
import { ProductListLayoutComponent } from './dummyComponents/product-list-layout/product-list-layout.component';
import { ProductTileLayoutComponent } from './dummyComponents/product-tile-layout/product-tile-layout.component';
import { ProductShoppingCartListComponent } from './dummyComponents/product-shopping-cart-list/product-shopping-cart-list.component';
import { FormsModule } from '@angular/forms';
import { LogService } from './services/log/log.service';
import { DevelopLogService } from './services/log/develop-log.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { SortPipe } from './tools/pipes/sort.pipe';
import { SearchPipe } from './tools/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductNavbarComponent,
    ProductListLayoutComponent,
    ProductTileLayoutComponent,
    ProductShoppingCartListComponent,
    SortPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LogService, useClass: DevelopLogService }, ProductService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
