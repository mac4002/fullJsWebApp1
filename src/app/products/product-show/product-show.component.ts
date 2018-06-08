import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-show',
  templateUrl: '../product-view-show/product-view-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  // Le produit sera envoyé depuis le parent
  @Input() private product: Product;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  private remove(): void {
    this.productService.delete(this.product._id).subscribe(
      (data) => {
        if (data.result) {
          this.router.navigate(['/produits']);
        } else {
          console.log(`L'id envoyé est incorrecte`);
        }
      }
    );
  }

}
