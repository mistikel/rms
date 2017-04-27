import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEmployeeComponent } from './tab-employee.component';

describe('TabEmployeeComponent', () => {
  let component: TabEmployeeComponent;
  let fixture: ComponentFixture<TabEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
