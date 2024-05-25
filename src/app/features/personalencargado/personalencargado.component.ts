import { Component, OnInit } from '@angular/core';
import { PersonalEncargadoService } from '../../core/services/personalencargado.service';

@Component({
  selector: 'app-personalencargado',
  templateUrl: './personalencargado.component.html',
  styleUrls: ['./personalencargado.component.css']
})
export class PersonalEncargadoComponent implements OnInit {
  personas: any[] = [];
  selectedPersonaEncargada: any = null;
  newPersonaEncargada = {
    iD_Encargado: null,
    iD_Empleado: null,
    nombre: '',
    apellido: ''
  };
  errorMessage = '';

  constructor(private personalEncargadoService: PersonalEncargadoService) { }

  ngOnInit(): void {
    this.loadPersonasEncargadas();
  }

  loadPersonasEncargadas(): void {
    this.personalEncargadoService.getPersonasEncargadas().subscribe(
      data => this.personas = data,
      error => this.errorMessage = error.message
    );
  }

  createPersonaEncargada(): void {
    const personaEncargada = {
      iD_Encargado: this.newPersonaEncargada.iD_Encargado,
      iD_Empleado: this.newPersonaEncargada.iD_Empleado,
      nombre: this.newPersonaEncargada.nombre,
      apellido: this.newPersonaEncargada.apellido
    };

    this.personalEncargadoService.createPersonaEncargada(personaEncargada).subscribe(
      () => {
        this.loadPersonasEncargadas();
        this.newPersonaEncargada = { iD_Encargado: null, iD_Empleado: null, nombre: '', apellido: '' };
      },
      error => this.errorMessage = error.message
    );
  }

  updatePersonaEncargada(): void {
    const personaEncargada = {
      iD_Encargado: this.selectedPersonaEncargada.iD_Encargado,
      iD_Empleado: this.selectedPersonaEncargada.iD_Empleado,
      nombre: this.selectedPersonaEncargada.nombre,
      apellido: this.selectedPersonaEncargada.apellido
    };

    this.personalEncargadoService.updatePersonaEncargada(personaEncargada).subscribe(
      () => {
        this.loadPersonasEncargadas();
        this.selectedPersonaEncargada = null;
      },
      error => this.errorMessage = error.message
    );
  }

  deletePersonaEncargada(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta persona encargada?')) {
      this.personalEncargadoService.deletePersonaEncargada(id).subscribe(
        () => this.loadPersonasEncargadas(),
        error => this.errorMessage = error.message
      );
    }
  }

  selectPersonaEncargada(persona: any): void {
    this.selectedPersonaEncargada = { ...persona };
  }

  clearSelection(): void {
    this.selectedPersonaEncargada = null;
  }
}
