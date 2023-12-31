import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { provideStore } from '@ngrx/store';
import { API_BASE_URL } from './swagger/api-client';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { effects, reducers } from './app/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AquariumFormComponent } from './app/components/aquarium-form/aquarium-form.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AquariumDetailComponent } from './app/components/aquarium-detail/aquarium-detail.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideStore(reducers),
    provideEffects(effects),
    provideStoreDevtools({connectInZone: true}),
    provideRouter([
        { path: '', component: HomeComponent },
        { path: 'create', component: AquariumFormComponent },
        { path: 'edit/:id', component: AquariumDetailComponent }
    ]),
    provideHttpClient(),
    { provide: API_BASE_URL, useValue: 'https://localhost:44312' },
    provideAnimations()
]
});