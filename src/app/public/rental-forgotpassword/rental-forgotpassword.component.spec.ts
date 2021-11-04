import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalForgotpasswordComponent } from './rental-forgotpassword.component';

describe('RentalForgotpasswordComponent', () => {
  let component: RentalForgotpasswordComponent;
  let fixture: ComponentFixture<RentalForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalForgotpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
