import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldModelComponent } from './form-field-model.component';

describe('FormFieldModelComponent', () => {
  let component: FormFieldModelComponent;
  let fixture: ComponentFixture<FormFieldModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldModelComponent]
    });
    fixture = TestBed.createComponent(FormFieldModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
