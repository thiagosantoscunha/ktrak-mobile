import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { TurmaModel } from '../core/models/turma.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos: TurmaModel[];

  constructor(private cursoService: CursosService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.cursoService.findAll().subscribe((cursos: TurmaModel[]) => {
      this.cursos = cursos;
      console.log(this.cursos);
    }, error => console.error(error));
  }

}
