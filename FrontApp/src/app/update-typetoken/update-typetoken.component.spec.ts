import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypetokenComponent } from './update-typetoken.component';

describe('UpdateTypetokenComponent', () => {
  let component: UpdateTypetokenComponent;
  let fixture: ComponentFixture<UpdateTypetokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTypetokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypetokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
