import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerMandatesComponent } from './dealer-mandates.component';

describe('DealerMandatesComponent', () => {
  let component: DealerMandatesComponent;
  let fixture: ComponentFixture<DealerMandatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerMandatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerMandatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
