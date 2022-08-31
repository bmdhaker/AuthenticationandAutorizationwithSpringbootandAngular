import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCentreRechargeComponent } from './update-centreRecharge.component';

describe('UpdateCentreRechargeComponent', () => {
  let component: UpdateCentreRechargeComponent;
  let fixture: ComponentFixture<UpdateCentreRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCentreRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCentreRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
