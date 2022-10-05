import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerialMessageComponent } from './managerial-message.component';

describe('ManagerialMessageComponent', () => {
  let component: ManagerialMessageComponent;
  let fixture: ComponentFixture<ManagerialMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerialMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerialMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
