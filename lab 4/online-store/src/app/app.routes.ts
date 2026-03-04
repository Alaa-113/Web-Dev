// src/app/app.routes.ts

import { Routes } from '@angular/router';                     // Angular import
import { ProductListComponent } from './components/product-list/product-list';  // YOUR import

export const routes: Routes = [
  { path: '', component: ProductListComponent }            // home page uses ProductListComponent
];