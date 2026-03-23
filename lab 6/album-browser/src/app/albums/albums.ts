import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // Add ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="albums-container">
      <h2>Photo Albums</h2>
      
      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading albums...</p>
      </div>

      <div *ngIf="!loading && albums.length === 0" class="empty-state">
        <p>No albums found</p>
      </div>

      <div class="albums-grid" *ngIf="!loading">
        <div *ngFor="let album of albums" class="album-card">
          <div class="album-content" [routerLink]="['/albums', album.id]">
            <h3>{{ album.title }}</h3>
            <p class="album-id">Album #{{ album.id }}</p>
            <p class="user-id">User ID: {{ album.userId }}</p>
          </div>
          <button class="delete-btn" (click)="deleteAlbum(album.id)">Delete</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .albums-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h2 {
      color: #333;
      margin-bottom: 30px;
      font-size: 2rem;
    }
    .loading {
      text-align: center;
      padding: 50px;
    }
    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #667eea;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .empty-state {
      text-align: center;
      padding: 50px;
      color: #666;
    }
    .albums-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .album-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s;
      display: flex;
      flex-direction: column;
    }
    .album-card:hover {
      transform: translateY(-5px);
    }
    .album-content {
      padding: 20px;
      cursor: pointer;
      flex-grow: 1;
    }
    .album-content h3 {
      color: #333;
      margin-bottom: 10px;
      font-size: 1.2rem;
    }
    .album-id {
      color: #667eea;
      font-size: 0.9rem;
      margin-bottom: 5px;
    }
    .user-id {
      color: #999;
      font-size: 0.8rem;
    }
    .delete-btn {
      width: 100%;
      padding: 10px;
      border: none;
      background: #ff6b6b;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }
    .delete-btn:hover {
      background: #ff5252;
    }
  `]
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef  // Add this
  ) {}

  ngOnInit() {
    console.log('Albums component initialized');
    console.log('Calling album service...');
    
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.albums = data;
        this.loading = false;
        this.cdr.detectChanges();  // Force change detection
        console.log('Loading set to false');
      },
      error: (error) => {
        console.error('Error loading albums:', error);
        this.loading = false;
        this.cdr.detectChanges();  // Force change detection
      }
    });
  }

  deleteAlbum(id: number) {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
          this.cdr.detectChanges();  // Force change detection
        },
        error: (error) => {
          console.error('Error deleting album:', error);
        }
      });
    }
  }
}