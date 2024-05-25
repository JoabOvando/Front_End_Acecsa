import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../core/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];
  selectedEmpleado: any = null;
  newEmpleado = {
    iD_Empleado: null,
    nombre: '',
    apellido: '',
    puesto: '',
    iD_Usuario: null
  };
  errorMessage = '';

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.loadEmpleados();
  }

  loadEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      data => this.empleados = data,
      error => this.errorMessage = error.message
    );
  }

  getEmpleado(id: number): void {
    this.empleadoService.getEmpleado(id).subscribe(
      data => this.selectedEmpleado = data,
      error => this.errorMessage = error.message
    );
  }

  createEmpleado(): void {
    const empleado = {
      iD_Empleado: this.newEmpleado.iD_Empleado,
      nombre: this.newEmpleado.nombre,
      apellido: this.newEmpleado.apellido,
      puesto: this.newEmpleado.puesto,
      iD_Usuario: this.newEmpleado.iD_Usuario
    };

    this.empleadoService.createEmpleado(empleado).subscribe(
      () => {
        this.loadEmpleados();
        this.newEmpleado = { iD_Empleado: null, nombre: '', apellido: '', puesto: '', iD_Usuario: null };
      },
      error => this.errorMessage = error.message
    );
  }

  updateEmpleado(): void {
    const empleado = {
      iD_Empleado: this.selectedEmpleado.iD_Empleado,
      nombre: this.selectedEmpleado.nombre,
      apellido: this.selectedEmpleado.apellido,
      puesto: this.selectedEmpleado.puesto,
      iD_Usuario: this.selectedEmpleado.iD_Usuario
    };

    this.empleadoService.updateEmpleado(this.selectedEmpleado.iD_Empleado, empleado).subscribe(
      () => {
        this.loadEmpleados();
        this.clearSelection();
      },
      error => this.errorMessage = error.message
    );
  }

  deleteEmpleado(id: number): void {
    this.empleadoService.deleteEmpleado(id).subscribe(
      () => this.loadEmpleados(),
      error => this.errorMessage = error.message
    );
  }

  selectEmpleado(empleado: any): void {
    this.selectedEmpleado = { ...empleado };
  }

  clearSelection(): void {
    this.selectedEmpleado = null;
  }
}
