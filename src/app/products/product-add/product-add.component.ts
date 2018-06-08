import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  // Produit que l'on va envoyer au serveur
  private product: Product;

  // Variables d'affichage
  private title: String;
  private submitValue: String;

  constructor(private productService: ProductService) {
    this.product = new Product();

    // Initialisation des variables d'affichage
    this.title = `Ajout d'un produit`;
    this.submitValue = 'Créer';
  }

  /**
   * Appel du service pour créer le produit en BDD (via l'API)
   */
  private saveProduct(): void {
    console.log('Formulaire soumis');

    // Ajout de la date de création
    this.product.createdAt = new Date();

    // Appel du service
    this.productService.addProduct(this.product).subscribe(
      (productAPI) => {
        console.log('Réception du nouveau produit');
        console.log(productAPI);
      }
    );
  }
}
