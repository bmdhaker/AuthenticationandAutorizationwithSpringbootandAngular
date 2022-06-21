import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompteurComponent } from './create-compteur.component';

describe('CreateCompteurComponent', () => {
  let component: CreateCompteurComponent;
  let fixture: ComponentFixture<CreateCompteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
