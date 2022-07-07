import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProduct() : Observable <Product[]> {
    return this.http.get <Product[]>(
      'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/products',
    );
  }
}
