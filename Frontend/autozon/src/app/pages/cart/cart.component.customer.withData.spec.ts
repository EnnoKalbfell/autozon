
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { customer, singleCart } from 'src/app/mocks/dataMocks';
import { LoginCustomerMockService } from 'src/app/mocks/loginCustomerMock';
import { ProductCustomerMockService } from 'src/app/mocks/productCustomerMock';

describe('CartComponent > Customer > With data', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        { provide: LoginService, useClass: LoginCustomerMockService },
        { provide: ProductService, useClass: ProductCustomerMockService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    sessionStorage.clear();
    sessionStorage.setItem('cart', JSON.stringify([{id: singleCart.id, amount: singleCart.amount}]));
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('and there are products in session storage', () => {
    it('on initialization, products are set correctly', () => {
      expect(component.products).toEqual([singleCart]);
      expect(component.user).toEqual(customer);
    });

    describe('and order button was clicked', () => {
      xit('order request is sent and session storage is empty', () => {
        // TODO: Simulate order() without the tests looping forever
        component.order();
        expect(sessionStorage.getItem('cart')).toEqual(null);
      });
    });
  });
});
