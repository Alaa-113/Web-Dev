import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="product-list-container">
      <div *ngIf="products.length === 0" class="empty-message">
        <p>No products in this category</p>
      </div>
      
      <div class="product-grid">
        <app-product-item 
          *ngFor="let product of products"
          [product]="product"
          (like)="handleLike(product.id)"
          (delete)="handleDelete(product.id)">
        </app-product-item>
      </div>
    </div>
  `,
  styles: [`
    .product-list-container {
      padding: 20px;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .empty-message {
      text-align: center;
      padding: 40px;
      font-size: 1.2rem;
      color: #666;
      background: #f8f9fa;
      border-radius: 8px;
    }
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() productDeleted = new EventEmitter<number>();

  handleLike(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  handleDelete(productId: number): void {
    this.productDeleted.emit(productId);
  }
}