import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Product } from '../model/product';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductViewShowComponent,
    ProductShowComponent,
    ProductUpdateComponent,
  ]
})
export class ProductModule { }
