import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { ProductService, ProductIdService } from 'src/app/core/services/product/product.service';
import { product, dealer, customer } from 'src/app/mocks/dataMocks';
import { ICartModel } from 'src/app/core/models/cart.model';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [
        { provide: LoginService, useValue: LoginMockService },
        { provide: ProductService, useValue: ProductMockService },
        ProductIdService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // productIdService.setId(1);
  });

  describe('and dealer is logged in', () => {
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
  
  describe('and customer is logged in', () => {
    // component.user = customer; // TODO: How can i set user?

    it('on initialization, values are set correctly', () => {
      expect(component.product).toEqual(product);
      expect(component.user).toEqual(customer);
      expect(component.showCartButton()).toEqual(true);
    });

    describe('and cart button was clicked', () => {
      it('correct product is saved in session storage', () => {
        const cart:ICartModel = {
          id: 1,
          amount: 1
        };

        component.addToCart();

        expect(sessionStorage.getItem('cart')).toEqual(JSON.stringify([cart]));
      });

      describe('and cart button was clicked twice', () => {
        it('amount of product in cart gets increased', () => {
          const cart:ICartModel = {
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
