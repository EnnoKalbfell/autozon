import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { ProductIdService, ProductService } from 'src/app/core/services/product/product.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/services/login/login.service';
import { IUser } from 'src/app/core/models/user.model';
import { product, singleCartAmountTwice } from 'src/app/mocks/dataMocks';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialogMock } from 'src/app/mocks/MatDialogMock';
import { By } from '@angular/platform-browser';

describe('ProductCardComponent > Dealer', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const productIdService: ProductIdService = new ProductIdService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ],
      providers: [
        { provide: ProductService, useClass: ProductMockService },
        { provide: LoginService, useClass: LoginMockService },
        { provide: MatDialog, useClass: MatDialogMock },
        { provide: ProductIdService, withValue: productIdService },
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

  describe('and user is not logged in', () => {
    describe('and is located in product overview', () => {
      it('on initialization, values for visitor are set correctly', () => {
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

        expect(component.user).toEqual(user);
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
      it('on initialization, values for visitor are set correctly', () => {
        fixture = TestBed.createComponent(ProductCardComponent);
        component = fixture.componentInstance;
        component.product = product;
        component.amount = 2;
        component.allProducts = [singleCartAmountTwice];
        component.route = '/my-products';
        fixture.detectChanges();
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

        expect(component.user).toEqual(user);
        expect(component.route).toEqual('/my-products');
        expect(fixture.debugElement.query(By.css('.deleteButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.cartButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('#detailsButton'))).toBeTruthy();
      });
    });

    describe('and is located in cart', () => {
      it('on initialization, values for visitor are set correctly', () => {
        fixture = TestBed.createComponent(ProductCardComponent);
        component = fixture.componentInstance;
        component.product = product;
        component.amount = 2;
        component.allProducts = [singleCartAmountTwice];
        component.route = '/cart';
        fixture.detectChanges();
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

        expect(component.user).toEqual(user);
        expect(component.route).toEqual('/cart');
        expect(fixture.debugElement.query(By.css('.deleteButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('.cartButton'))).toBeNull();
        expect(fixture.debugElement.query(By.css('#detailsButton'))).toBeTruthy();
      });
    });
  });
});
