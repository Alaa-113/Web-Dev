import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1 style="text-align:center; margin:20px 0;">
      Kaspi Online Store
    </h1>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}