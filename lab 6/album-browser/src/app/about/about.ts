import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h2>About Album Browser</h2>
      <div class="info-card">
        <p><strong>Name:</strong> Alaa</p>
        <p><strong>Course:</strong> Web Development</p>
        <p><strong>Lab:</strong> Lab 6 - Album Browser with Routing & HTTP</p>
        <p><strong>Description:</strong> A photo album browser built with Angular, featuring routing, HTTP client, and CRUD operations using JSONPlaceholder API.</p>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 600px;
      margin: 50px auto;
      padding: 40px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    h2 {
      color: #333;
      text-align: center;
      margin-bottom: 30px;
      font-size: 2rem;
    }
    .info-card p {
      margin: 15px 0;
      padding: 10px;
      background: #f8f9fa;
      border-radius: 8px;
      color: #555;
      line-height: 1.6;
    }
    .info-card strong {
      color: #667eea;
      min-width: 120px;
      display: inline-block;
    }
  `]
})
export class About {}