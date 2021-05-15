import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { ProductService, ProductIdService } from 'src/app/core/services/product/product.service';
import { product, dealer, singleCart } from 'src/app/mocks/dataMocks';
import { LoginDealerMockService } from 'src/app/mocks/loginDealerMock';

describe('ProductDetailComponent > Dealer', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [
        { provide: LoginService, useClass: LoginDealerMockService },
        { provide: ProductService, useClass: ProductMockService },
        ProductIdService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    sessionStorage.clear();
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('and dealer is logged in', async () => {
    it('on initialization, values are set correctly', () => {
      expect(component.product).toEqual(product);
      expect(component.user).toEqual(dealer);
      expect(component.showCartButton()).toEqual(false);
    });

    describe('and cart button was clicked', () => {
      it('nothing was added to sessionStorage', () => {
        component.addToCart();
        expect(sessionStorage.getItem('cart')).toEqual(null);
      });
    });
  });
});
