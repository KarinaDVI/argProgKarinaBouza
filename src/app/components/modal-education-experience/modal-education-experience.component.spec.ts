import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducationExperienceComponent } from './modal-education-experience.component';

describe('ModalEducationExperienceComponent', () => {
  let component: ModalEducationExperienceComponent;
  let fixture: ComponentFixture<ModalEducationExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEducationExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEducationExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
