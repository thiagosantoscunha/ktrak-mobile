import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoModel } from '../models/aluno.model';
import { MarcaPresencaModel, MarcaPresencaDto } from '../models/marca-presenca.model';


@Injectable({
  providedIn: 'root'
})
export class MarcaPresencaService {

  private baseUrl: string = environment.base_href + '/mobile/v1/marca-presenca';
  private alunoId = environment.ID_ALUNO_TEST;
  private username = environment.USERNAME_TEST;

  constructor(private http: HttpClient) {
  }

  marcaPorChave(key: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?username=${this.username}&key=${key}`);
  }
}
