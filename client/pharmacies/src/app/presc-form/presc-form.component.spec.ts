import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescFormComponent } from './presc-form.component';

describe('PrescFormComponent', () => {
  let component: PrescFormComponent;
  let fixture: ComponentFixture<PrescFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
