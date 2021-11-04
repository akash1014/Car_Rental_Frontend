import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalSignupComponent } from './rental-signup.component';

describe('RentalSignupComponent', () => {
  let component: RentalSignupComponent;
  let fixture: ComponentFixture<RentalSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
