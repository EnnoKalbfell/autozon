import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductOverviewComponent } from './product-overview.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
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
        { provide: ProductService, useClass: ProductMockService },
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
});
