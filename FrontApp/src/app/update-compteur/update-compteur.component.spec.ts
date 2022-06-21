import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompteurComponent } from './update-compteur.component';

describe('UpdateCompteurComponent', () => {
  let component: UpdateCompteurComponent;
  let fixture: ComponentFixture<UpdateCompteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
