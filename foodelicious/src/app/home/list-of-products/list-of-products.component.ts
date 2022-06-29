import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {
  products: Product[] | undefined= [];
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {

    /* console.log("->"+this.productService.getProduct()) */
    this.getProduct()
  }

async getProduct(){
    this.products = await this.productService.getProduct().toPromise();
    console.log('Bri', this.products);
  }
}
