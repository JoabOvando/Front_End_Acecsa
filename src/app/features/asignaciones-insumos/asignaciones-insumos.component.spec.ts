import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionesInsumosComponent } from './asignaciones-insumos.component';

describe('AsignacionesInsumosComponent', () => {
  let component: AsignacionesInsumosComponent;
  let fixture: ComponentFixture<AsignacionesInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsignacionesInsumosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignacionesInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
