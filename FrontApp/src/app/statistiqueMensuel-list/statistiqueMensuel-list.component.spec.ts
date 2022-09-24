import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueMensuelListComponent } from './statistiqueMensuel-list.component';

describe('BonusListComponent', () => {
  let component: StatistiqueMensuelListComponent;
  let fixture: ComponentFixture<StatistiqueMensuelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueMensuelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueMensuelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
