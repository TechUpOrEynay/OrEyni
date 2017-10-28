import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationComponent } from './donation.component';

describe('CustomerDetailsComponent', () => {
  let component: DonationComponent;
  let fixture: ComponentFixture<DonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
