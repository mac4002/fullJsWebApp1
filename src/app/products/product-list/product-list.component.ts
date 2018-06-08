import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Notre tableau de produits
  private products: Product[];
  private productSelected: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // On récupère les produits depuis le service
    this.productService.getProducts().subscribe(
      (productsAPI: Product[]) => {
        console.log('Produits réceptionnés');
        // On attribue les produits reçus à notre tableau de produits
        this.products = productsAPI;
      }
    );
  }

}
