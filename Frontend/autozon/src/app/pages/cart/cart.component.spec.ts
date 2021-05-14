import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { customer, singleCart } from 'src/app/mocks/dataMocks';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        { provide: LoginService, useValue: LoginMockService },
        { provide: ProductService, useValue: ProductMockService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('and there are no products in session storage', () => {
    it('on initialization, no products are set', () => {
      expect(component.products).toEqual([]);
      expect(component.user).toEqual(customer);
    });
  });

  describe('and there are products in session storage', () => {
    sessionStorage.setItem('cart', JSON.stringify(singleCart));

    it('on initialization, products are set correctly', () => {
      expect(component.products).toEqual([singleCart]);
      expect(component.user).toEqual(customer);
    });

    describe('and order button was clicked', () => {
      it('order request is sent and session storage is empty', () => {
        component.order();
        expect(new ProductMockService().placeOrder).toHaveBeenCalled();
        expect(sessionStorage.getItem('cart')).toEqual(null);
      });
    });
  });
});
