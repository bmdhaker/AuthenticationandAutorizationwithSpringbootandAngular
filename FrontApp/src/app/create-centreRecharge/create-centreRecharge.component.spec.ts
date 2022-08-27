import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCentreRechargeComponent } from './create-centreRecharge.component';

describe('CreateCentreRechargeComponent', () => {
  let component: CreateCentreRechargeComponent;
  let fixture: ComponentFixture<CreateCentreRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCentreRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCentreRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
