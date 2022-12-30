import { Component } from '@angular/core';
import { Cart, CartLine } from 'src/app/model/cart.model';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent {
  includeShipped:boolean = false;
  orders: Order[] = [];

  constructor(
    private orderRepository: OrderRepository
  ) {}

  getOrders(): Order[] {

    let cart: Cart = new Cart();
    cart.lines = [
      {
        "lineTotal": 0.0,
        "product": {
          "id": 2,
          "name": "Premium Lifejacket",
          "category": "Watersports",
          "description": "Protective and fashionable",
          "price": 48.95
        },
        "quantity": 1
      },
      {
        "lineTotal": 0.0,
        "product": {
          "id": 5,
          "name": "Stadium",
          "category": "Soccer",
          "description": "Flat-packed 35,000-seat stadium",
          "price": 79500
        },
        "quantity": 1
      }
    ];
    cart.itemCount = 2;
    cart.cartPrice = 79548.95;

    let order: Order =
    {
      "cart": cart,
      "id": 5,
      "name": "srini",
      "address": "Fremont",
      "city": "Fremont",
      "state": "CA",
      "zip": "94538",
      "country": "United States",
      "shipped": false,
      clear: function (): void {
        throw new Error('Function not implemented.');
      }
    };

    console.log('order');
    console.log(order);
    this.orders = [];
    this.orders.push(order);
    return this.orderRepository.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.orderRepository.updateOrder(order);
  }

  delete(id: number) {
    this.orderRepository.deleteOrder(id);
  }
}
