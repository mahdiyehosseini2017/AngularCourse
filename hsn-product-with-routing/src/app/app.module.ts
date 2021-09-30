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
import { PageNotFoundComponent } from './smartComponents/page-not-found/page-not-found.component';

const app_routes: Routes = [
  {
    path: 'product',
    component: ProductsComponent,
    children: [
      {
        path: 'product-list-layout',
        component: ProductListLayoutComponent
      },
      {
        path: 'product-tile-layout',
        component: ProductTileLayoutComponent
      },
      {
        path: '',
        redirectTo: 'product-list-layout',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'shopping-cart',
    component: ProductShoppingCartListComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListLayoutComponent,
    ProductTileLayoutComponent,
    ProductNavbarComponent,
    ProductShoppingCartListComponent,
    ProductDetailComponent,
    PageNotFoundComponent
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
