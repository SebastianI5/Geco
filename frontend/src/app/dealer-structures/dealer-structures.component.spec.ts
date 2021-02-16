import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerStructuresComponent } from './dealer-structures.component';

describe('DealerStructuresComponent', () => {
  let component: DealerStructuresComponent;
  let fixture: ComponentFixture<DealerStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerStructuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
