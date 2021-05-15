import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductOverviewComponent } from './product-overview.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ProductIdMockService } from 'src/app/mocks/productMock.service';
import { product } from 'src/app/mocks/dataMocks';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('ProductOverviewComponent', () => {
  let component: ProductOverviewComponent;
  let fixture: ComponentFixture<ProductOverviewComponent>;
  const url = {
    brand: 'Smart',
    model: 'Smart'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOverviewComponent ],
      providers: [
        { provide: ProductService, useClass: ProductIdMockService },
        { provide: ActivatedRoute, useValue: { params: of(url) } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('and parameters fit on product', () => {
    it('values are set correctly', () => {
      expect(component.products).toEqual([product]);
    });
  });
  
  describe('and parameters do not fit on product', () => {
    it('no products are set', () => {
      // TODO: Set params differently
      expect(component.products).toEqual([]);
    });
  });
});
