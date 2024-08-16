import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  addToCart(product: Product) {
    console.log('Product added to cart:', product);
    // Burada ürünü sepete eklemek için gerekli işlemleri yapabilirsiniz
  }
}
