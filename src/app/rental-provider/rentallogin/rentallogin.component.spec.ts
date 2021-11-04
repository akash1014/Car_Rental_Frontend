import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalloginComponent } from './rentallogin.component';

describe('RentalloginComponent', () => {
  let component: RentalloginComponent;
  let fixture: ComponentFixture<RentalloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
