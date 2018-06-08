import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
const routes: Routes = [
  { path: 'produits', component: ProductListComponent},
  { path: 'produits/ajout', component: ProductAddComponent},
  { path: 'produits/detail/:id', component: ProductViewShowComponent },
  { path: 'produits/modification/:id', component: ProductUpdateComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
