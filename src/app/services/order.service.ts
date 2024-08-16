import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  placeOrder(orderDetails: any) {
    console.log('Order placed:', orderDetails);
  }
}
