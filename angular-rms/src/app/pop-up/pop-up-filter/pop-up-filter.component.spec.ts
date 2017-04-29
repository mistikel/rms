import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFilterComponent } from './pop-up-filter.component';

describe('PopUpFilterComponent', () => {
  let component: PopUpFilterComponent;
  let fixture: ComponentFixture<PopUpFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
