import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsGetComponent } from './students-get.component';

describe('StudentsGetComponent', () => {
  let component: StudentsGetComponent;
  let fixture: ComponentFixture<StudentsGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
