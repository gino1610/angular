import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  constructor(
    private productRepository: ProductRepository
  ) {}

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  deleteProduct(id: number) {
    this.productRepository.deleteProduct(id);
  }
}
