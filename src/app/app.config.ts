import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};

// tem que ter o nome + provider
