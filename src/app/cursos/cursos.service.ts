import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TurmaModel } from '../core/models/turma.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private baseUrl: string = environment.base_href + '/mobile/v1/turmas';
  private alunoId = 1;

  constructor(private http: HttpClient) {

  }

  findAll(): Observable<TurmaModel[]> {
    return this.http.get<TurmaModel[]>(`${this.baseUrl}?alunoId=${this.alunoId}`);
  }
}
