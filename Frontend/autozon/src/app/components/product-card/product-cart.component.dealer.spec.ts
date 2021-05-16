import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { ProductIdService, ProductService } from 'src/app/core/services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/services/login/login.service';
import { dealer, product, singleCartAmountTwice } from 'src/app/mocks/dataMocks';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialogMock } from 'src/app/mocks/MatDialogMock';
import { ProductDealerMockService } from 'src/app/mocks/productDealerMock';
import { LoginDealerMockService } from 'src/app/mocks/loginDealerMock';
import { By } from '@angular/platform-browser';

describe('ProductCardComponent > Visitor', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const productIdService: ProductIdService = new ProductIdService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ],
      providers: [
        { provide: ProductIdService, withValue: productIdService },
        { provide: ProductService, useClass: ProductDealerMockService },
        { provide: LoginService, useClass: LoginDealerMockService },
        { provide: MatDialog, useClass: MatDialogMock },
        Overlay
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = product;
    component.amount = 2;
    component.allProducts = [singleCartAmountTwice];
    component.route = '/products';
    fixture.detectChanges();
  });

  describe('and dealer is logged in', () => {
    describe('and is located in product overview', () => {
      it('on initialization, values for dealer are set correctly', () => {
        expect(component.user).toEqual(dealer);
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
      it('on initialization, values for dealer are set correctly', () => {
        fixture = TestBed.createComponent(ProductCardComponent);
        component = fixture.componentInstance;
        component.product = product;
        component.route = '/my-products';
        fixture.detectChanges();

        expect(component.user).toEqual(dealer);
        expect(component.route).toEqual('/my-products');
        expect(fixture.debugElement.query(By.css('.deleteButton'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.cartButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('#detailsButton'))).toBeTruthy();
      });

      describe('and delete button was clicked', () => {
        xit('product should be deleted', () => {
          // TODO: Fix mock to not blow test
          fixture = TestBed.createComponent(ProductCardComponent);
          component = fixture.componentInstance;
          component.product = product;
          component.route = '/my-products';
          fixture.detectChanges();

          // component.deleteProduct();
          // fixture.detectChanges();

          expect(component.product).toEqual({});
        });
      });
    });

    describe('and is located in cart', () => {
      it('on initialization, values for dealer are set correctly', () => {
        fixture = TestBed.createComponent(ProductCardComponent);
        component = fixture.componentInstance;
        component.product = product;
        component.route = '/cart';
        fixture.detectChanges();

        expect(component.user).toEqual(dealer);
        expect(component.route).toEqual('/cart');
        expect(fixture.debugElement.query(By.css('.deleteButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.cartButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('#detailsButton'))).toBeTruthy();
      });
    });
  });
});
