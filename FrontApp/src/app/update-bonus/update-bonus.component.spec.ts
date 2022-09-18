import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBonusComponent } from './update-bonus.component';

describe('UpdateBonusComponent', () => {
  let component: UpdateBonusComponent;
  let fixture: ComponentFixture<UpdateBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
