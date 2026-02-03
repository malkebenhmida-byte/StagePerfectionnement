import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Client } from './client/client';
import { ClientModif } from './client-modif/client-modif';
import { ClientAjout } from './client-ajout/client-ajout';

export const routes: Routes = [

    { path: '', component: Login },
  { path: 'clients', component: Client },
  { path: 'client-modif/:identifiant', component: ClientModif } , 
   { path: 'client-ajout', component: ClientAjout }
];
