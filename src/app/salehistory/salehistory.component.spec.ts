import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalehistoryComponent } from './salehistory.component';

describe('SalehistoryComponent', () => {
  let component: SalehistoryComponent;
  let fixture: ComponentFixture<SalehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalehistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
