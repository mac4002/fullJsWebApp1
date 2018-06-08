import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: '../product-add/product-add.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  // Produit actuel (récupéré grâce à l'id)
  private product: Product;

  // Variables d'affichage
  private title: String;
  private submitValue: String;

  constructor(
      private productService: ProductService,
      private route: ActivatedRoute,
      private router: Router
    ) {
    // Initialisation des variables d'affichage
    this.title = `Modification d'un produit`;
    this.submitValue = 'Modifier';
  }

  ngOnInit() {
    // Récupération de l'id depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');

    // Utilisation du service pour récupérer le produit de l'API et l'attribuer à notre produit de Component
    this.productService.showProduct(id).subscribe(
      (productAPI) => {
        console.log('Réception du produit');
        if (productAPI) {
          this.product = productAPI;
        } else {
          // Redirection vers la page 404
          this.router.navigate(['/error-404']);
        }
      }
    );
  }

  /**
   * Appel du service pour la modification en BDD
   */
  private saveProduct(): void {
    console.log('Formulaire de modification soumis');

    this.productService.update(this.product).subscribe(
      (data) => {
        console.log('Modification effectuée ? ' + data.result);
        if (data.result) {
          this.router.navigate(['/produits/detail/' + this.product._id]);
        }
      }
    );
  }
}
