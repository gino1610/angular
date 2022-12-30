import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store/store.component';
import { CounterDirective } from './counter.directive';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    CartDetailComponent,
    CheckoutComponent,
    StoreComponent,
  ],
  declarations: [
    CartDetailComponent,
    CheckoutComponent,
    CounterDirective,
    StoreComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,

    ModelModule,
    RouterModule,
  ]
})
export class StoreModule { }
