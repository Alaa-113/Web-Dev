import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <img [src]="product.image" [alt]="product.name" class="product-image" />
      
      <div class="product-details">
        <h3>{{ product.name }}</h3>
        <p class="description">{{ product.description }}</p>
        
        <div class="price-rating">
          <p class="price">{{ product.price | number }} KZT</p>
          <p class="rating">⭐ {{ product.rating }}</p>
        </div>

        <div class="likes-section">
          <span class="likes-count">❤️ {{ product.likes }}</span>
          <button class="like-btn" (click)="onLike()">Like</button>
        </div>

        <a [href]="product.kaspiLink" target="_blank" class="kaspi-link">
          View on Kaspi
        </a>

        <div class="action-buttons">
          <button class="share-btn" (click)="shareWhatsApp()">WhatsApp</button>
          <button class="share-btn" (click)="shareTelegram()">Telegram</button>
          <button class="delete-btn" (click)="onDelete()">Delete</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      border: 1px solid #ddd;
      border-radius: 12px;
      overflow: hidden;
      background: white;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    }

    .product-image {
      width: 100%;
      height: 200px;
      object-fit: contain;
      padding: 20px;
      background: #f8f9fa;
    }

    .product-details {
      padding: 20px;
    }

    h3 {
      margin: 0 0 10px;
      color: #333;
      font-size: 1.2rem;
    }

    .description {
      color: #666;
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 15px;
    }

    .price-rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .price {
      font-weight: bold;
      color: #2c7a7b;
      font-size: 1.2rem;
    }

    .rating {
      color: #f1c40f;
      font-weight: bold;
    }

    .likes-section {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
      padding: 10px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }

    .likes-count {
      font-size: 1.1rem;
      color: #e74c3c;
    }

    .like-btn {
      padding: 6px 16px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .like-btn:hover {
      background: #2980b9;
    }

    .kaspi-link {
      display: inline-block;
      margin-bottom: 15px;
      color: #1a73e8;
      text-decoration: none;
      font-weight: 500;
    }

    .kaspi-link:hover {
      text-decoration: underline;
    }

    .action-buttons {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .share-btn {
      flex: 1;
      padding: 8px;
      border: none;
      border-radius: 6px;
      background: #eee;
      cursor: pointer;
      transition: background 0.2s;
      min-width: 80px;
    }

    .share-btn:hover {
      background: #ddd;
    }

    .delete-btn {
      flex: 1;
      padding: 8px;
      border: none;
      border-radius: 6px;
      background: #ff6b6b;
      color: white;
      cursor: pointer;
      transition: background 0.2s;
      min-width: 80px;
    }

    .delete-btn:hover {
      background: #ff5252;
    }
  `]
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onLike(): void {
    this.like.emit(this.product.id);
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.delete.emit(this.product.id);
    }
  }

  shareWhatsApp(): void {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product.kaspiLink)}`;
    window.open(url, '_blank');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.kaspiLink)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}