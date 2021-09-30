import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductNavbarComponent } from './dummyComponents/product-navbar/product-navbar.component';
import { ProductsComponent } from './smartComponents/products/products.component';
import { ProductListLayoutComponent } from './smartComponents/product-list-layout/product-list-layout.component';
import { ProductTileLayoutComponent } from './smartComponents/product-tile-layout/product-tile-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { ProductShoppingCartListComponent } from './smartComponents/product-shopping-cart-list/product-shopping-cart-list.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductDetailComponent } from './smartComponents/product-detail/product-detail.component';

const app_routes: Routes = [{
  path: 'product', component: ProductsComponent,
  children: [
    { path: '', redirectTo: 'product-list-layout', pathMatch: 'full' },
    { path: 'product-list-layout', component: ProductListLayoutComponent },
    { path: 'product-tile-layout', component: ProductTileLayoutComponent },
  ]
},
{ path: 'shopping-cart', component: ProductShoppingCartListComponent },
{ path: 'product-details/:id', component: ProductDetailComponent },
{ path: '', redirectTo: 'product', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListLayoutComponent,
    ProductTileLayoutComponent,
    ProductNavbarComponent,
    ProductShoppingCartListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(app_routes),
  ],
  providers: [ProductService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
