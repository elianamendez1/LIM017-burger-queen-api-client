import { Injectable } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// eslint-disable-next-line import/no-unresolved
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
// eslint-disable-next-line import/prefer-default-export
export class ProductsService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private http: HttpClient) {}

  getProduct() : Observable <Product[]> {
    return this.http.get <Product[]>(
      'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/products',
    );
  }
}
