import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormateurComponent } from './create-formateur.component';

describe('CreateFormateurComponent', () => {
  let component: CreateFormateurComponent;
  let fixture: ComponentFixture<CreateFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
