import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoModel } from '../models/aluno.model';
import { MarcaPresencaModel } from '../models/marca-presenca.model';


@Injectable({
  providedIn: 'root'
})
export class MarcaPresencaService {

  private baseUrl: string = environment.base_href + '/mobile/v1/alunos';
  private alunoId = environment.ID_ALUNO_TEST;
  private username = environment.USERNAME_TEST;

  constructor(private http: HttpClient) {
  }

  marcaPorChave(key: string): Observable<MarcaPresencaModel> {
    return this.http.get<MarcaPresencaModel>(`${this.baseUrl}?username=${this.username}&key=${key}`);
  }
}
