import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="home-container">
      <h1>Welcome to Album Browser</h1>
      <p class="description">
        Browse through our collection of photo albums. View album details, 
        edit titles, and explore beautiful photos from various collections.
      </p>
      <a routerLink="/albums" class="browse-btn">Browse Albums</a>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 800px;
      margin: 50px auto;
      text-align: center;
      padding: 40px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333;
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    .description {
      color: #666;
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    .browse-btn {
      display: inline-block;
      padding: 12px 30px;
      background: #667eea;
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-size: 1.1rem;
      transition: transform 0.3s;
    }
    .browse-btn:hover {
      transform: translateY(-2px);
    }
  `]
})
export class Home {}