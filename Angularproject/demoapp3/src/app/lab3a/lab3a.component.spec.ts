import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3aComponent } from './lab3a.component';

describe('Lab3aComponent', () => {
  let component: Lab3aComponent;
  let fixture: ComponentFixture<Lab3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab3aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
