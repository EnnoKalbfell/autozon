import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { ProductService, ProductIdService } from 'src/app/core/services/product/product.service';
import { product, customer, singleCart } from 'src/app/mocks/dataMocks';
import { ICartModel } from 'src/app/core/models/cart.model';
import { LoginCustomerMockService } from 'src/app/mocks/loginCustomerMock';

describe('ProductDetailComponent > Customer', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [
        { provide: LoginService, useClass: LoginCustomerMockService },
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

  describe('and customer is logged in', () => {
    it('on initialization, values are set correctly', () => {
      expect(component.product).toEqual(product);
      expect(component.user).toEqual(customer);
      expect(component.showCartButton()).toEqual(true);
    });

    describe('and cart button was clicked', () => {
      it('correct product is saved in session storage', () => {
        const cart: ICartModel = {
          id: 1,
          amount: 1
        };

        component.addToCart();

        expect(sessionStorage.getItem('cart')).toEqual(JSON.stringify([cart]));
      });

      describe('and cart button was clicked twice', () => {
        it('amount of product in cart gets increased', () => {
          const cart: ICartModel = {
            id: 1,
            amount: 2
          };

          component.addToCart();
          component.addToCart();

          expect(sessionStorage.getItem('cart')).toEqual(JSON.stringify([cart]));
        });
      });
    });
  });
});
