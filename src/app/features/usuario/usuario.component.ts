import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../core/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any[] = [];
  selectedUsuario: any = null;
  newUsuario = {
    iD_Usuario: null,
    nombre: '',
    password: ''
  };
  errorMessage = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      data => this.usuarios = data,
      error => this.errorMessage = error.message
    );
  }

  getUsuario(id: number): void {
    this.usuarioService.getUsuario(id).subscribe(
      data => this.selectedUsuario = data,
      error => this.errorMessage = error.message
    );
  }

  createUsuario(): void {
    const usuario = {
      ID_Usuario: this.newUsuario.iD_Usuario,
      nombre: this.newUsuario.nombre,
      password: this.newUsuario.password
    };

    this.usuarioService.createUsuario(usuario).subscribe(
      () => {
        this.loadUsuarios();
        this.newUsuario = { iD_Usuario: null, nombre: '', password: '' };
      },
      error => this.errorMessage = error.message
    );
  }

  updateUsuario(): void {
    const usuario = {
      ID_Usuario: this.selectedUsuario.iD_Usuario,
      nombre: this.selectedUsuario.nombre,
      password: this.selectedUsuario.password
    };

    this.usuarioService.updateUsuario(this.selectedUsuario.iD_Usuario, usuario).subscribe(
      () => {
        this.loadUsuarios();
        this.clearSelection();
      },
      error => this.errorMessage = error.message
    );
  }

  deleteUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(
      () => this.loadUsuarios(),
      error => this.errorMessage = error.message
    );
  }

  selectUsuario(usuario: any): void {
    this.selectedUsuario = { ...usuario };
  }

  clearSelection(): void {
    this.selectedUsuario = null;
  }
}
