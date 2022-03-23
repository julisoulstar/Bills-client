import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingBillComponent } from './reading-bill.component';

describe('ReadingBillComponent', () => {
  let component: ReadingBillComponent;
  let fixture: ComponentFixture<ReadingBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
