import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompteurLoggedUserComponent } from './update-compteurLoggedUser.component';

describe('UpdateCompteurLoggedUserComponent', () => {
  let component: UpdateCompteurLoggedUserComponent;
  let fixture: ComponentFixture<UpdateCompteurLoggedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompteurLoggedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompteurLoggedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
