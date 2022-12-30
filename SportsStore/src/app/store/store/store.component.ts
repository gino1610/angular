import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  
  public selectedCategory: string|null = null;
  public productsPerPage: number = 4;
  public selectedPage: number = 1;

  constructor(
    private productRepository: ProductRepository,
    private cart: Cart,
    private router: Router
    ) {  }

  get products(): Product[] {
    let pageIndex:number = (this.selectedPage - 1) * this.productsPerPage;
    
    return this.productRepository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.productRepository.getCategories();
  }

  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage))
  //     .fill(0).map((xx, ii) => ii + 1);
  // }

  get pageCount(): number {
    return Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage);
  }

  public changeCategory(newCategory?: string):void {
    this.selectedCategory = newCategory as string;
  }

  /**
   * Method to change page in the pagination bar
   * @param newPage 
   */
  public changePage(newPage: number):void {
    if (newPage <= 0) {
      this.selectedPage = 1;
    } else if (newPage > this.pageCount) {
      this.selectedPage = this.pageCount;
    } else {
      this.selectedPage = newPage;
    }
  }

  public changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
}
