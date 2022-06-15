import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypetokenComponent } from './create-typetoken.component';

describe('CreateTypetokenComponent', () => {
  let component: CreateTypetokenComponent;
  let fixture: ComponentFixture<CreateTypetokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTypetokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypetokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
