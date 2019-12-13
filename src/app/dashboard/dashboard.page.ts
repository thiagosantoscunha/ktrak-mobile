import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
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

  constructor(private alunoService: AlunoService, private alert: AlertController) { }

  ngOnInit() {
    this.findByActiveUser();
  }

  findByActiveUser() {
    this.alunoService.findByUsername().subscribe(async (aluno: AlunoModel) => {
      this.aluno = aluno;
    }, error => console.error(error));
  }

}
