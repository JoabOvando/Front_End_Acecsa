import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthService } from './core/auth/auth.service';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthInterceptor } from './core/auth/auth.interceptor';
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
import { HomeComponent } from './pages/home/home.component';
import { PersonalEncargadoComponent } from './features/personalencargado/personalencargado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsuarioComponent,
    RolesComponent,
    EmpleadosComponent,
    RecursosComponent,
    VehiculosComponent,
    InsumosComponent,
    CharlasComponent,
    PersonalCharlaComponent,
    AsignacionesRecursosComponent,
    AsignacionesVehiculosComponent,
    AsignacionesInsumosComponent,
    HomeComponent,
    PersonalEncargadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    AuthService,
    AuthGuard,
    provideHttpClient(withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }