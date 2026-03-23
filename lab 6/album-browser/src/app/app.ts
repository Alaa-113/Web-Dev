import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="logo">📸 Album Browser</a>
        <div class="nav-links">
          <a routerLink="/home" routerLinkActive="active">Home</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/albums" routerLinkActive="active">Albums</a>
        </div>
      </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      background: #667eea;
      color: white;
      padding: 1rem;
    }
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
      margin-left: 20px;
      padding: 5px 10px;
    }
    .nav-links a.active {
      background: rgba(255,255,255,0.2);
      border-radius: 5px;
    }
    main {
      min-height: calc(100vh - 80px);
      background: #f5f5f5;
      padding: 20px;
    }
  `]
})
export class App {}