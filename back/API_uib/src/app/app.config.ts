import {importProvidersFrom ,ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter ,RouterModule, Routes } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Client } from './client/client';
import { Login } from './login/login';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ClientModif } from './client-modif/client-modif';
import { ClientAjout } from './client-ajout/client-ajout';
import { ClientRecherche } from './client-recherche/client-recherche';
const routes: Routes = [
  { path: '', component: Login },
  { path: 'clients', component: Client , runGuardsAndResolvers: 'always'},
  { path: 'client-modif/:identifiant', component:ClientModif },
  { path: 'client-ajout', component: ClientAjout },
  { path: 'client-recherche/:identifiant', component: ClientRecherche },

  
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    importProvidersFrom(ReactiveFormsModule, RouterModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
