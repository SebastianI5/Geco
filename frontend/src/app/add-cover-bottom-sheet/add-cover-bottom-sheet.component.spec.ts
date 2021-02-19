import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoverBottomSheetComponent } from './add-cover-bottom-sheet.component';

describe('AddCoverBottomSheetComponent', () => {
  let component: AddCoverBottomSheetComponent;
  let fixture: ComponentFixture<AddCoverBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoverBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoverBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
