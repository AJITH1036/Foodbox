import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodlistUserComponent } from './foodlist-user.component';

describe('FoodlistUserComponent', () => {
  let component: FoodlistUserComponent;
  let fixture: ComponentFixture<FoodlistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodlistUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodlistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
