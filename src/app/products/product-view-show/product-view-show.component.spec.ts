import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewShowComponent } from './product-view-show.component';

describe('ProductViewShowComponent', () => {
  let component: ProductViewShowComponent;
  let fixture: ComponentFixture<ProductViewShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
