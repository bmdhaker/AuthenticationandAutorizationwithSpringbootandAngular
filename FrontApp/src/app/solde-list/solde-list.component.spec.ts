import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldeListComponent } from './solde-list.component';

describe('SoldeListComponent', () => {
  let component: SoldeListComponent;
  let fixture: ComponentFixture<SoldeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
