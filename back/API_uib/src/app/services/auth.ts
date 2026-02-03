import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class Authentification 
{

  private apiUrl = 'http://localhost:8081/api/auth';


  constructor(private http: HttpClient , private router: Router) {}

   login(email: string, password: string ):  Observable<string> {
    return this.http.post(
      `${this.apiUrl}/login`,
      { email, password },
      {  responseType: 'text' }
    );
  }

  logout() {
    // Supprimer le token ou l'information de session
    localStorage.removeItem('token'); 
    console.log('Utilisateur déconnecté');

    // Rediriger vers la page login
    this.router.navigate(['/']);
  }
isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  
}



