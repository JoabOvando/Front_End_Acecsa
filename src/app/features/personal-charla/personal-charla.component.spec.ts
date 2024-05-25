import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCharlaComponent } from './personal-charla.component';

describe('PersonalCharlaComponent', () => {
  let component: PersonalCharlaComponent;
  let fixture: ComponentFixture<PersonalCharlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalCharlaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalCharlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
