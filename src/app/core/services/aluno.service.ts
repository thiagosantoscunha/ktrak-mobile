import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoModel } from '../models/aluno.model';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseUrl: string = environment.base_href + '/mobile/v1/alunos';
  private alunoId = environment.ID_ALUNO_TEST;
  private username = environment.USERNAME_TEST;

  constructor(private http: HttpClient) {
  }

  findByUsername(): Observable<AlunoModel> {
    return this.http.get<AlunoModel>(`${this.baseUrl}?username=${this.username}`);
  }
}
