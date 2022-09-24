import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueAnnuelListComponent } from './statistiqueAnnuel-list.component';

describe('BonusListComponent', () => {
  let component: StatistiqueAnnuelListComponent;
  let fixture: ComponentFixture<StatistiqueAnnuelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueAnnuelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueAnnuelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
