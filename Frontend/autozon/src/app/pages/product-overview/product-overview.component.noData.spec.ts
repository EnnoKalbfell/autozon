import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductOverviewComponent } from './product-overview.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ProductNoResultMockService } from 'src/app/mocks/productNoResultMock';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ProductOverviewComponent > No data', () => {
  let component: ProductOverviewComponent;
  let fixture: ComponentFixture<ProductOverviewComponent>;
  const url = {
    brand: 'Rainbow',
    model: 'Unicorn'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOverviewComponent ],
      providers: [
        { provide: ProductService, useClass: ProductNoResultMockService },
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

  describe('and parameters do not fit on product', () => {
    it('no products are set', () => {
      expect(component.products).toEqual([]);
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toContain(
        'Es wurden keine passenden Produkte gefunden.'
      );
    });
  });
});
