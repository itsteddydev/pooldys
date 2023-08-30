import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import ProductsModule from './pages/products/products.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/products/products.module')
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductsModule, RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
