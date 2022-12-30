import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private productRepository: ProductRepository,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.editing = this.activeRoute.snapshot.params["mode"] === "edit";
    
    if (this.editing) {
      let id = Number(this.activeRoute.snapshot.params["id"]);
      if (!isNaN(id)) {
        Object.assign(this.product, this.productRepository.getProduct(id));
      }
    }
  }

  save(form: NgForm) {
    this.productRepository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
