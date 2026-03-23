/*import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1 style="color: #007bff;">🛒 Online Store</h1>
      
      <div style="display: flex; gap: 20px; margin-top: 20px;">
        <!-- Categories Sidebar -->
        <div style="width: 250px; background: #f8f9fa; padding: 20px; border-radius: 8px;">
          <h3>Categories</h3>
          <div *ngIf="categoriesLoading">Loading...</div>
          <ul style="list-style: none; padding: 0;">
            <li *ngFor="let cat of categories" 
                (click)="selectCategory(cat)"
                style="padding: 8px; margin: 5px 0; cursor: pointer; background: {{selectedCategory?.id === cat.id ? '#007bff' : '#e9ecef'}}; color: {{selectedCategory?.id === cat.id ? 'white' : 'black'}}; border-radius: 4px;">
              {{ cat.name }}
            </li>
          </ul>
          <button (click)="showAll()" style="margin-top: 10px; padding: 8px; width: 100%; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Show All
          </button>
        </div>
        
        <!-- Products Grid -->
        <div style="flex: 1;">
          <h2>{{ selectedCategory ? selectedCategory.name + ' Products' : 'All Products' }}</h2>
          
          <div *ngIf="loading">Loading products...</div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
            <div *ngFor="let p of products" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
              <h3 style="margin: 0 0 10px 0;">{{ p.name }}</h3>
              <p style="color: #666;">{{ p.description }}</p>
              <p style="font-size: 24px; color: #28a745; font-weight: bold;">${{ p.price }}</p>
              <p>Category: {{ p.category }}</p>
              <p>Stock: {{ p.count }}</p>
              <button (click)="addToCart(p)" style="background: #007bff; color: white; border: none; padding: 8px; width: 100%; border-radius: 4px; cursor: pointer;">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class App {
  products: any[] = [];
  categories: any[] = [];
  selectedCategory: any = null;
  loading = false;
  categoriesLoading = false;

  constructor(private http: HttpClient) {
    this.loadCategories();
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.http.get('http://localhost:8000/api/products/')
      .subscribe({
        next: (data: any) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
  }

  loadCategories() {
    this.categoriesLoading = true;
    this.http.get('http://localhost:8000/api/categories/')
      .subscribe({
        next: (data: any) => {
          this.categories = data;
          this.categoriesLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.categoriesLoading = false;
        }
      });
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
    this.loading = true;
    this.http.get(`http://localhost:8000/api/categories/${category.id}/products/`)
      .subscribe({
        next: (data: any) => {
          this.products = data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
  }

  showAll() {
    this.selectedCategory = null;
    this.loadProducts();
  }

  addToCart(product: any) {
    alert(`Added ${product.name} to cart!`);
  }
}*/