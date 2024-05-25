import { Component, OnInit } from '@angular/core';
import { RolService } from '../../core/services/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: any[] = [];
  selectedRol: any = null;
  newRol = {
    iD_Rol: null,
    nombre: '',
    descripcion: ''
  };
  errorMessage = '';

  constructor(private rolService: RolService) { }

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.rolService.getRoles().subscribe(
      data => this.roles = data,
      error => this.errorMessage = error.message
    );
  }

  getRol(id: number): void {
    this.rolService.getRol(id).subscribe(
      data => this.selectedRol = data,
      error => this.errorMessage = error.message
    );
  }

  createRol(): void {
    const rol = {
      iD_Rol: this.newRol.iD_Rol,
      nombre: this.newRol.nombre,
      descripcion: this.newRol.descripcion
    };

    this.rolService.createRol(rol).subscribe(
      () => {
        this.loadRoles();
        this.newRol = { iD_Rol: null, nombre: '', descripcion: '' };
      },
      error => this.errorMessage = error.message
    );
  }

  updateRol(): void {
    const rol = {
      iD_Rol: this.selectedRol.iD_Rol,
      nombre: this.selectedRol.nombre,
      descripcion: this.selectedRol.descripcion
    };

    this.rolService.updateRol(this.selectedRol.iD_Rol, rol).subscribe(
      () => {
        this.loadRoles();
        this.clearSelection();
      },
      error => this.errorMessage = error.message
    );
  }

  deleteRol(id: number): void {
    this.rolService.deleteRol(id).subscribe(
      () => this.loadRoles(),
      error => this.errorMessage = error.message
    );
  }

  selectRol(rol: any): void {
    this.selectedRol = { ...rol };
  }

  clearSelection(): void {
    this.selectedRol = null;
  }
}
