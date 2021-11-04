import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditareasComponent } from './editareas.component';

describe('EditareasComponent', () => {
  let component: EditareasComponent;
  let fixture: ComponentFixture<EditareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
