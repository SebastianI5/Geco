import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocTypeBottomSheetComponent } from './add-doc-type-bottom-sheet.component';

describe('AddDocTypeBottomSheetComponent', () => {
  let component: AddDocTypeBottomSheetComponent;
  let fixture: ComponentFixture<AddDocTypeBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDocTypeBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocTypeBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
