// Modules d'angular

// Modules persos
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

// Components persos
import { AppComponent } from './app.component';
import { Error404Component } from './errors/error404/error404.component';
import { ProductModule } from './products/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    ProductModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
