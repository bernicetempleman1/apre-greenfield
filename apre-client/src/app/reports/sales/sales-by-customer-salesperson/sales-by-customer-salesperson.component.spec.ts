import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCustomerSalespersonComponent } from './sales-by-customer-salesperson.component';

describe('SalesByCustomerSalespersonComponent', () => {
  let component: SalesByCustomerSalespersonComponent;
  let fixture: ComponentFixture<SalesByCustomerSalespersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesByCustomerSalespersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesByCustomerSalespersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
