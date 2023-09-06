import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API = 'https://fakestoreapi.com/products';
  private readonly _http = inject(HttpClient);
  // constructor() { }

  public getProducts(): Observable<Product[]> {
    return this._http
      .get<Product[]>(this.API)
      .pipe(map((products) => products.sort(() => Math.random() - 0.5)));
  }

  public getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`${this.API}/${id}`);
  }
}
