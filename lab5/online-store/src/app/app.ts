<<<<<<< HEAD
/*import { Component, signal } from '@angular/core';
=======
import { Component, signal } from '@angular/core';
>>>>>>> e2b7776db465729289b666e5dff2cfa8ccc67de7
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
<<<<<<< HEAD
}*/
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('online-store');

  products: any[] = [];
  categories: any[] = [];
  selectedCategory: any = null;
  productsError: string = '';
  categoriesError: string = '';

  constructor(private service: ProductService) {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.loadAllProducts();
    this.loadCategories();
  }

  loadAllProducts() {
    console.log('Loading products...');
    this.service.getProducts().subscribe({
      next: (data) => {
        console.log('Products received:', data);
        this.products = Array.isArray(data) ? data : [];
        this.productsError = '';
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.productsError = error.message || 'Failed to load products';
      }
    });
  }

  loadCategories() {
    console.log('Loading categories...');
    this.service.getCategories().subscribe({
      next: (data) => {
        console.log('Categories received:', data);
        this.categories = Array.isArray(data) ? data : [];
        this.categoriesError = '';
      },
      error: (error) => {
        console.error('Error loading categories:', error);
        this.categoriesError = error.message || 'Failed to load categories';
      }
    });
  }

  selectCategory(category: any) {
    console.log('Selected category:', category);
    this.selectedCategory = category;
    this.service.getProductsByCategory(category.id).subscribe({
      next: (data) => {
        console.log('Products in category:', data);
        this.products = Array.isArray(data) ? data : [];
      },
      error: (error) => {
        console.error('Error loading products by category:', error);
        this.productsError = error.message || 'Failed to load products';
      }
    });
  }

  // ADD THIS METHOD
  showAllProducts() {
    console.log('Showing all products');
    this.selectedCategory = null;
    this.loadAllProducts();
  }

  addToCart(product: any) {
    console.log('Added to cart:', product);
    alert(`Added ${product.name} to cart!`);
  }
=======
>>>>>>> e2b7776db465729289b666e5dff2cfa8ccc67de7
}