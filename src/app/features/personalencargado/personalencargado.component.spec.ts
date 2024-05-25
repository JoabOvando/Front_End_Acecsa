import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalencargadoComponent } from './personalencargado.component';

describe('PersonalencargadoComponent', () => {
  let component: PersonalencargadoComponent;
  let fixture: ComponentFixture<PersonalencargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalencargadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalencargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
