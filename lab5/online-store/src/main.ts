<<<<<<< HEAD
/*import { bootstrapApplication } from '@angular/platform-browser';
=======
import { bootstrapApplication } from '@angular/platform-browser';
>>>>>>> e2b7776db465729289b666e5dff2cfa8ccc67de7
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
<<<<<<< HEAD
});*/
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideHttpClient()  
  ]
}).catch(err => console.error(err));
=======
});
>>>>>>> e2b7776db465729289b666e5dff2cfa8ccc67de7
