import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { CATEGORIES, PRODUCTS } from './models/product.data';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <div class="app-container">
      <h1 class="main-title">Kaspi Online Store</h1>
      
      <!-- Categories Section -->
      <div class="categories-container">
        <button 
          *ngFor="let category of categories"
          class="category-btn"
          [class.active]="selectedCategoryId === category.id"
          (click)="selectCategory(category.id)">
          <span class="category-icon">{{ category.icon }}</span>
          <span class="category-name">{{ category.name }}</span>
        </button>
      </div>

      <!-- Welcome Message or Product List -->
      <div class="content">
        <div *ngIf="!selectedCategoryId" class="welcome-message">
          <h2>Welcome to Kaspi Online Store!</h2>
          <p>Please select a category to view products.</p>
        </div>

        <app-product-list 
          *ngIf="selectedCategoryId"
          [products]="filteredProducts"
          (productDeleted)="handleProductDeleted($event)">
        </app-product-list>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .main-title {
      text-align: center;
      margin: 20px 0 30px;
      color: #333;
      font-size: 2.5rem;
    }

    .categories-container {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .category-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border: 2px solid #e0e0e0;
      border-radius: 30px;
      background: white;
      cursor: pointer;
      font-size: 1.1rem;
      transition: all 0.3s ease;
    }

    .category-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .category-btn.active {
      background: #2c7a7b;
      border-color: #2c7a7b;
      color: white;
    }

    .category-icon {
      font-size: 1.3rem;
    }

    .welcome-message {
      text-align: center;
      padding: 60px 20px;
      background: #f8f9fa;
      border-radius: 12px;
    }

    .welcome-message h2 {
      color: #333;
      margin-bottom: 15px;
    }

    .welcome-message p {
      color: #666;
      font-size: 1.1rem;
    }
  `]
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;
  selectedCategoryId: number | null = null;

  get filteredProducts(): Product[] {
    if (!this.selectedCategoryId) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  handleProductDeleted(productId: number): void {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }
}