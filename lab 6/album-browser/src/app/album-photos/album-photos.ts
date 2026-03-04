import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="photos-container">
      <div class="header">
        <h2>Album Photos</h2>
        <button class="back-btn" (click)="goBack()">Back to Album</button>
      </div>

      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading photos...</p>
      </div>

      <div *ngIf="!loading && photos.length === 0" class="empty-state">
        <p>No photos found for this album</p>
      </div>

      <div class="photos-grid" *ngIf="!loading">
        <div *ngFor="let photo of photos" class="photo-card">
          <img [src]="'https://picsum.photos/200/150?random=' + photo.id" [alt]="photo.title" class="photo-thumb">
          <div class="photo-title">{{ photo.title }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .photos-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    h2 {
      color: #333;
      font-size: 2rem;
    }
    .back-btn {
      padding: 10px 20px;
      background: #e0e0e0;
      color: #333;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      transition: transform 0.3s;
    }
    .back-btn:hover {
      transform: translateY(-2px);
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
    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
    .photo-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    .photo-card:hover {
      transform: translateY(-5px);
    }
    .photo-thumb {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    .photo-title {
      padding: 10px;
      font-size: 0.9rem;
      color: #555;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `]
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPhotos(id);
  }

  loadPhotos(albumId: number) {
    this.albumService.getAlbumPhotos(albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading photos:', error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack() {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', id]);
  }
}