import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { ProductIdService, ProductService } from 'src/app/core/services/product/product.service';
import { ProductIdMockService } from 'src/app/mocks/productMock.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/services/login/login.service';
import { customer, product, singleCartAmountTwice, singleCart } from 'src/app/mocks/dataMocks';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialogMock } from 'src/app/mocks/MatDialogMock';
import { ProductCustomerMockService } from 'src/app/mocks/productCustomerMock';
import { LoginCustomerMockService } from 'src/app/mocks/loginCustomerMock';
import { By } from '@angular/platform-browser';

describe('ProductCardComponent > Customer', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const productIdService: ProductIdService = new ProductIdService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ],
      providers: [
        { provide: ProductIdService, withValue: productIdService },
        { provide: ProductService, useClass: ProductCustomerMockService },
        { provide: LoginService, useClass: LoginCustomerMockService },
        { provide: MatDialog, useClass: MatDialogMock },
        Overlay
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    sessionStorage.clear();
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = product;
    component.amount = 2;
    component.allProducts = [singleCartAmountTwice];
    component.route = '/products';
    fixture.detectChanges();
  });

  describe('and customer is logged in', () => {
    describe('and is located in product overview', () => {
      it('on initialization, values for customer are set correctly', () => {
        expect(component.user).toEqual(customer);
        expect(component.route).toEqual('/products');
        expect(fixture.debugElement.query(By.css('.deleteButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.cartButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('#detailsButton'))).toBeTruthy();
      });

      describe('and details button was clicked', () => {
        it('id should be set in productIdService', () => {
          const expected: number = product.id || 1;
          component.clickDetails();

          expect(productIdService.getId()).toEqual(expected);
        });
      });
    });

    describe('and is located in my products', () => {
      it('on initialization, values for customer are set correctly', () => {
        fixture = TestBed.createComponent(ProductCardComponent);
        component = fixture.componentInstance;
        component.product = product;
        component.amount = 2;
        component.allProducts = [singleCartAmountTwice];
        component.route = '/my-products';
        fixture.detectChanges();

        expect(component.user).toEqual(customer);
        expect(component.route).toEqual('/my-products');
        expect(fixture.debugElement.query(By.css('.deleteButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.cartButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('#detailsButton'))).toBeTruthy();
      });
    });

    describe('and is located in cart', () => {
      it('on initialization, values for customer are set correctly', () => {
        fixture = TestBed.createComponent(ProductCardComponent);
        component = fixture.componentInstance;
        component.product = product;
        component.amount = 2;
        component.allProducts = [singleCartAmountTwice];
        component.route = '/cart';
        fixture.detectChanges();

        expect(component.user).toEqual(customer);
        expect(component.route).toEqual('/cart');
        expect(fixture.debugElement.query(By.css('.deleteButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.cartButton'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#detailsButton'))).toBeTruthy();
      });

      describe('and remove button was clicked', () => {
        it('should decrease amount of product in session storage', () => {
          fixture = TestBed.createComponent(ProductCardComponent);
          component = fixture.componentInstance;
          component.product = product;
          component.amount = 2;
          component.allProducts = [singleCartAmountTwice];
          component.route = '/cart';
          fixture.detectChanges();

          component.removeProduct();

          expect(sessionStorage.getItem('cart')).toEqual(JSON.stringify([singleCart]));
        });

        describe('and remove button was clicked again', () => {
          it('should remove product from session storage', () => {
            fixture = TestBed.createComponent(ProductCardComponent);
            component = fixture.componentInstance;
            component.product = product;
            component.amount = 1;
            component.allProducts = [singleCart];
            component.route = '/cart';
            fixture.detectChanges();

            component.removeProduct();

            expect(sessionStorage.getItem('cart')).toEqual(JSON.stringify([]));
          });
        });
      });
    });
  });
});
