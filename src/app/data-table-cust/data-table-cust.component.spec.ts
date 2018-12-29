import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableCustComponent } from './data-table-cust.component';

describe('DataTableCustComponent', () => {
  let component: DataTableCustComponent;
  let fixture: ComponentFixture<DataTableCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
