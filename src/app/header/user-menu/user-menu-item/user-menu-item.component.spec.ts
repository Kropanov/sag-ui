import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuItemComponent } from './user-menu-item.component';

describe('UserMenuItemComponent', () => {
  let component: UserMenuItemComponent;
  let fixture: ComponentFixture<UserMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMenuItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
