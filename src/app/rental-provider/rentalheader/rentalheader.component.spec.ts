import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalheaderComponent } from './rentalheader.component';

describe('RentalheaderComponent', () => {
  let component: RentalheaderComponent;
  let fixture: ComponentFixture<RentalheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
