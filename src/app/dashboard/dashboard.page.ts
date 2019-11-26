import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../core/services/aluno.service';
import { AlunoModel } from '../core/models/aluno.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  aluno: AlunoModel = new AlunoModel();

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.findByActiveUser();
  }

  findByActiveUser() {
    this.alunoService.findByUsername().subscribe((aluno: AlunoModel) => {
      this.aluno = aluno;
      console.log(aluno);
    }, error => console.error(error));
  }

}
