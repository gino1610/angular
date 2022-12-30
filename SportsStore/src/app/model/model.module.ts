import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { RestDataSource } from './rest-data-source';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    CartSummaryComponent,
  ],
  exports: [
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    Cart,
    Order,
    OrderRepository,
    ProductRepository,
    RestDataSource,
    // { provide: StaticDataSource, useClass: RestDataSource}
  ],

})
export class ModelModule { }
