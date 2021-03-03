import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOccupationByPecComponent } from './report-occupation-by-pec.component';

describe('ReportOccupationByPecComponent', () => {
  let component: ReportOccupationByPecComponent;
  let fixture: ComponentFixture<ReportOccupationByPecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOccupationByPecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportOccupationByPecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
