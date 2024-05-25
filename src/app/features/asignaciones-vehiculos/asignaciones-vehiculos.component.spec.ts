import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionesVehiculosComponent } from './asignaciones-vehiculos.component';

describe('AsignacionesVehiculosComponent', () => {
  let component: AsignacionesVehiculosComponent;
  let fixture: ComponentFixture<AsignacionesVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsignacionesVehiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignacionesVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
