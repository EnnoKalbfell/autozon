import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { ProductService, ProductIdService } from 'src/app/core/services/product/product.service';
import { product, dealer, customer, singleCart } from 'src/app/mocks/dataMocks';
import { ICartModel } from 'src/app/core/models/cart.model';
import { LoginDealerMockService } from 'src/app/mocks/loginDealerMock';
import { LoginCustomerMockService } from 'src/app/mocks/loginCustomerMock';
import { IUser } from 'src/app/core/models/user.model';

describe('ProductDetailComponent > Visitor', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [
        { provide: LoginService, useClass: LoginMockService },
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

  describe('and user is not logged in', async () => {
    it('on initialization, values are set correctly', () => {
      const user: IUser = {
        id: 0,
        lastName: '',
        firstName: '',
        companyName: '',
        email: '',
        phone: '',
        streetAndHouseNumber: '',
        zipCode: '',
        city: '',
        country: '',
        role: '',
        verified: false
      };
      expect(component.product).toEqual(product);
      expect(component.user).toEqual(user);
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
