import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { customer } from 'src/app/mocks/dataMocks';
import { LoginCustomerMockService } from 'src/app/mocks/loginCustomerMock';
import { By } from '@angular/platform-browser';

describe('CartComponent > Customer', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        { provide: LoginService, useClass: LoginCustomerMockService },
        { provide: ProductService, useClass: ProductMockService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    sessionStorage.clear();
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('and there are no products in session storage', () => {
    it('on initialization, no products are set', () => {
      expect(component.products).toEqual([]);
      expect(component.user).toEqual(customer);
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toContain(
        'Sie haben Ihrem Warenkorb noch keine Produkte hinzugefügt.'
      );
    });
  });
});
