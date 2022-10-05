import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerialUpdateComponent } from './managerial-update.component';

describe('ManagerialUpdateComponent', () => {
  let component: ManagerialUpdateComponent;
  let fixture: ComponentFixture<ManagerialUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerialUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerialUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
