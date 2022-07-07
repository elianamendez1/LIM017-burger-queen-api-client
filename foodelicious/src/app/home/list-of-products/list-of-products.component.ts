import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import { Product } from 'src/app/models/product.interface';
// eslint-disable-next-line import/no-unresolved
import { ProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
})
// eslint-disable-next-line import/prefer-default-export
export class ListOfProductsComponent implements OnInit {
  products: Product[] | undefined = [];

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    /* console.log("->"+this.productService.getProduct()) */
    this.getProduct();
  }

  async getProduct() {
    this.products = await this.productService.getProduct().toPromise();
    console.log('Bri', this.products);
  }
}
