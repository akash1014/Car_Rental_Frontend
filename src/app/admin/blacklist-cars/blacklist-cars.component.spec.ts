import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistCarsComponent } from './blacklist-cars.component';

describe('BlacklistCarsComponent', () => {
  let component: BlacklistCarsComponent;
  let fixture: ComponentFixture<BlacklistCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacklistCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
