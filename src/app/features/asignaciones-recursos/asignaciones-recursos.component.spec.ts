import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionesRecursosComponent } from './asignaciones-recursos.component';

describe('AsignacionesRecursosComponent', () => {
  let component: AsignacionesRecursosComponent;
  let fixture: ComponentFixture<AsignacionesRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsignacionesRecursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignacionesRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
