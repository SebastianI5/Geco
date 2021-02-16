import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerContractsComponent } from './dealer-contracts.component';

describe('DealerContractsComponent', () => {
  let component: DealerContractsComponent;
  let fixture: ComponentFixture<DealerContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
