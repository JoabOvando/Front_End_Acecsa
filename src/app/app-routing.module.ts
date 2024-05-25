import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuarioComponent } from './features/usuario/usuario.component';
import { RolesComponent } from './features/roles/roles.component';
import { EmpleadosComponent } from './features/empleados/empleados.component';
import { RecursosComponent } from './features/recursos/recursos.component';
import { VehiculosComponent } from './features/vehiculos/vehiculos.component';
import { InsumosComponent } from './features/insumos/insumos.component';
import { CharlasComponent } from './features/charlas/charlas.component';
import { PersonalCharlaComponent } from './features/personal-charla/personal-charla.component';
import { AsignacionesRecursosComponent } from './features/asignaciones-recursos/asignaciones-recursos.component';
import { AsignacionesVehiculosComponent } from './features/asignaciones-vehiculos/asignaciones-vehiculos.component';
import { AsignacionesInsumosComponent } from './features/asignaciones-insumos/asignaciones-insumos.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalEncargadoComponent } from './features/personalencargado/personalencargado.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'empleados', component: EmpleadosComponent },
      { path: 'recursos', component: RecursosComponent },
      { path: 'vehiculos', component: VehiculosComponent },
      { path: 'insumos', component: InsumosComponent },
      { path: 'charlas', component: CharlasComponent },
      { path: 'personal-charla', component: PersonalCharlaComponent },
      { path: 'asignaciones-recursos', component: AsignacionesRecursosComponent },
      { path: 'asignaciones-vehiculos', component: AsignacionesVehiculosComponent },
      { path: 'asignaciones-insumos', component: AsignacionesInsumosComponent },
      { path: 'personalencargado', component: PersonalEncargadoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
