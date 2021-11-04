import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcitiesComponent } from './editcities.component';

describe('EditcitiesComponent', () => {
  let component: EditcitiesComponent;
  let fixture: ComponentFixture<EditcitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
