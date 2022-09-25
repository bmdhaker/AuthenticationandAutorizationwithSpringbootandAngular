import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurByUserListComponent } from './compteurByUser-list.component';

describe('CompteurListComponent', () => {
  let component: CompteurByUserListComponent;
  let fixture: ComponentFixture<CompteurByUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteurByUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteurByUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
