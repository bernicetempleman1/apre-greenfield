import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByYearComponent } from './sales-by-year.component';

describe('SalesByYearComponent', () => {
  let component: SalesByYearComponent;
  let fixture: ComponentFixture<SalesByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesByYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
