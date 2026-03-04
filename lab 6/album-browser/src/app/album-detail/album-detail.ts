import { Component, OnInit, ChangeDetectorRef } from '@angular/core';  // Add ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="detail-container">
      <div *ngIf="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading album...</p>
      </div>

      <div *ngIf="!loading && album" class="album-detail">
        <h2>Album Details</h2>
        
        <div class="detail-card">
          <p><strong>ID:</strong> {{ album.id }}</p>
          <p><strong>User ID:</strong> {{ album.userId }}</p>
          
          <div class="edit-section">
            <label for="title">Title:</label>
            <input 
              type="text" 
              id="title" 
              [(ngModel)]="editedTitle" 
              [placeholder]="album.title"
              class="title-input"
            >
            <button 
              class="save-btn" 
              (click)="saveTitle()"
              [disabled]="saving"
            >
              {{ saving ? 'Saving...' : 'Save' }}
            </button>
          </div>
        </div>

        <div class="action-buttons">
          <a [routerLink]="['/albums', album.id, 'photos']" class="photos-btn">
            View Photos
          </a>
          <button class="back-btn" (click)="goBack()">Back to Albums</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .detail-container {
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
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
    h2 {
      color: #333;
      margin-bottom: 30px;
    }
    .detail-card {
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }
    .detail-card p {
      margin: 15px 0;
      color: #555;
    }
    .detail-card strong {
      color: #667eea;
      min-width: 80px;
      display: inline-block;
    }
    .edit-section {
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #eee;
    }
    .edit-section label {
      display: block;
      margin-bottom: 8px;
      color: #555;
      font-weight: bold;
    }
    .title-input {
      width: 100%;
      padding: 10px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      margin-bottom: 15px;
      font-size: 1rem;
    }
    .title-input:focus {
      outline: none;
      border-color: #667eea;
    }
    .save-btn {
      padding: 10px 20px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      transition: opacity 0.3s;
    }
    .save-btn:hover:not(:disabled) {
      opacity: 0.9;
    }
    .save-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .action-buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
    }
    .photos-btn, .back-btn {
      padding: 12px 30px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      text-decoration: none;
      text-align: center;
      transition: transform 0.3s;
    }
    .photos-btn {
      background: #667eea;
      color: white;
    }
    .back-btn {
      background: #e0e0e0;
      color: #333;
    }
    .photos-btn:hover, .back-btn:hover {
      transform: translateY(-2px);
    }
  `]
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  saving = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef  // Add this
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAlbum(id);
  }

  loadAlbum(id: number) {
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
        this.cdr.detectChanges();  // Force change detection
      },
      error: (error) => {
        console.error('Error loading album:', error);
        this.loading = false;
        this.cdr.detectChanges();  // Force change detection
      }
    });
  }

  saveTitle() {
    if (this.album && this.editedTitle !== this.album.title) {
      this.saving = true;
      const updatedAlbum = { ...this.album, title: this.editedTitle };
      
      this.albumService.updateAlbum(updatedAlbum).subscribe({
        next: () => {
          if (this.album) {
            this.album.title = this.editedTitle;
          }
          this.saving = false;
          this.cdr.detectChanges();  // Force change detection
        },
        error: (error) => {
          console.error('Error updating album:', error);
          this.saving = false;
          this.cdr.detectChanges();  // Force change detection
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}