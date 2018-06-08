// Modules d'angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Classe de modèle
import { Product } from '../model/product';

// RxJS : Les observables
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'http://localhost:3000/api/products';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
   * Récupération des produits via l'API REST de Node
   */
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL).pipe(
      tap(() => console.log('Réception des produits'))
    );
  }

  /**
   * Ajout d'un produit en BDD via l'API REST de Node
   * @param product Le produit à mettre en base de données
   */
  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiURL, product, this.httpOptions).pipe(
      tap(() => console.log(`Retour de l'API après l'ajout du produit`))
    );
  }

  /**
   * Récupération d'un produit (grâce à l'id) via l'API REST de Node
   * @param id L'id du produit reçu depuis l'URL
   */
  public showProduct(id: String): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/' + id).pipe(
      tap((product) => console.log(`Réception du produit portant l'id ${id}`))
    );
  }

  /**
   * Mofication d'un produit via l'API REST de Node
   * @param product Produit à modifier en BDD
   */
  public update(product: Product): Observable<{result: Boolean}> {
    return this.http.put<{result: Boolean}>(this.apiURL, product, this.httpOptions).pipe(
      tap((data) => console.log('Retour de modification : ' + data.result))
    );
  }

  /**
   * Suppression d'un produit via l'API REST de Node
   * @param id L'id du produit à supprimer
   */
  public delete(id: String): Observable<{result: Boolean}> {
    return this.http.delete<{result: Boolean}>(this.apiURL + '/' + id).pipe(
      tap((data) => console.log('Retour de suppression : ' + data.result))
    );
  }
}
