import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDealerNoPecComponent } from './report-dealer-no-pec.component';

describe('ReportDealerNoPecComponent', () => {
  let component: ReportDealerNoPecComponent;
  let fixture: ComponentFixture<ReportDealerNoPecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDealerNoPecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDealerNoPecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
