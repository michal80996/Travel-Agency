import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryStoreComponent } from './jewelry-store.component';

describe('JewelryStoreComponent', () => {
  let component: JewelryStoreComponent;
  let fixture: ComponentFixture<JewelryStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelryStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
