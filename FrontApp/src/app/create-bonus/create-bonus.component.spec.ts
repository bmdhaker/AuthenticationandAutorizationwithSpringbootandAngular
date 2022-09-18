import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBonusComponent } from './create-bonus.component';

describe('CreateBonusComponent', () => {
  let component: CreateBonusComponent;
  let fixture: ComponentFixture<CreateBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
