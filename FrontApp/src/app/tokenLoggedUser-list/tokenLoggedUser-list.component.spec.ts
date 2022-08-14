import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenLoggedUserListComponent } from './tokenLoggedUser-list.component';

describe('TokenLoggedUserListComponent', () => {
  let component: TokenLoggedUserListComponent;
  let fixture: ComponentFixture<TokenLoggedUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenLoggedUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenLoggedUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
