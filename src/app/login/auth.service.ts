import { Login } from './../../models/login.model';
import { Usuario } from './../core/models/usuario.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.base_href + '/' + environment.version_api;
  }

  public login(user: Login): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/auth/login`, user );
  }
}
