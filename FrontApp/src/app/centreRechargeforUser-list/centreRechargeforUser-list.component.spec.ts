import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreRechargeforUserListComponent } from './centreRechargeforUser-list.component';

describe('CentreRechargeforUserListComponent', () => {
  let component: CentreRechargeforUserListComponent;
  let fixture: ComponentFixture<CentreRechargeforUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreRechargeforUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreRechargeforUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
