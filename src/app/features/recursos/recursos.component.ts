import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../core/services/recurso.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {

  recursos: any[] = [];
  recurso: any = {
    iD_Recurso: null,
    nombre: '',
    descripcion: ''
  };

  constructor(private recursosService: RecursosService) { }

  ngOnInit(): void {
    this.loadRecursos();
  }

  loadRecursos() {
    this.recursosService.getRecursos().subscribe(
      (data: any[]) => {
        this.recursos = data;
      },
      (error) => {
        console.error('Error al cargar recursos: ', error);
      }
    );
  }

  createRecurso() {
    this.recursosService.createRecurso(this.recurso).subscribe(
      (data) => {
        console.log('Recurso creado exitosamente: ', data);
        this.loadRecursos();
        this.clearForm();
      },
      (error) => {
        console.error('Error al crear recurso: ', error);
      }
    );
  }

  updateRecurso(id: number) {
    this.recursosService.updateRecurso(id, this.recurso).subscribe(
      (data) => {
        console.log('Recurso actualizado exitosamente: ', data);
        this.loadRecursos();
        this.clearForm();
      },
      (error) => {
        console.error('Error al actualizar recurso: ', error);
      }
    );
  }

  deleteRecurso(id: number) {
    this.recursosService.deleteRecurso(id).subscribe(
      (data) => {
        console.log('Recurso eliminado exitosamente: ', data);
        this.loadRecursos();
        this.clearForm();
      },
      (error) => {
        console.error('Error al eliminar recurso: ', error);
      }
    );
  }

  clearForm() {
    this.recurso = {
      iD_Recurso: null,
      nombre: '',
      descripcion: ''
    };
  }
}
