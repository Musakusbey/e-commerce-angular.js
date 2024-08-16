import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      image: 'https://via.placeholder.com/150', // Yer tutucu görsel URL'si
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 150,
      image: 'https://via.placeholder.com/150', // Yer tutucu görsel URL'si
    },
    // Diğer ürünler...
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
