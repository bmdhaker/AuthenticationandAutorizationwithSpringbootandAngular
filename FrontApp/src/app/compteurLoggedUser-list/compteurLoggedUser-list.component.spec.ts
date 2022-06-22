import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurLoggedUserListComponent } from './compteurLoggedUser-list.component';

describe('CompteurLoggedUserListComponent', () => {
  let component: CompteurLoggedUserListComponent;
  let fixture: ComponentFixture<CompteurLoggedUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteurLoggedUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteurLoggedUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
