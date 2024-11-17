import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBySalespersonComponent } from './sales-by-salesperson.component';

describe('SalesBySalespersonComponent', () => {
  let component: SalesBySalespersonComponent;
  let fixture: ComponentFixture<SalesBySalespersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesBySalespersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesBySalespersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
