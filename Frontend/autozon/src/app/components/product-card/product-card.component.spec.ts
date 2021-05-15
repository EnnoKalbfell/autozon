import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { ProductIdService, ProductService } from 'src/app/core/services/product/product.service';
import { ProductIdMockService, ProductMockService } from 'src/app/mocks/productMock.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/core/services/login/login.service';
import { IUser } from 'src/app/core/models/user.model';
import { dealer, customer, product, singleCartAmountTwice } from 'src/app/mocks/dataMocks';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialogMock } from 'src/app/mocks/MatDialogMock';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ],
      providers: [
        { provide: ProductIdService, useClass: ProductIdMockService },
        { provide: ProductService, useClass: ProductMockService },
        { provide: LoginService, useClass: LoginMockService },
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
    fixture.detectChanges();
  });

  describe('and user is not logged in', () => {
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
    });

    describe('and is located in product overview', () => {

    });

    describe('and is located in my products', () => {

    });

    describe('and is located in cart', () => {

    });
  });

  describe('and dealer is logged in', () => {
    it('on initialization, values for dealer are set correctly', () => {
      expect(component.user).toEqual(dealer);
    });

    describe('and is located in product overview', () => {

    });

    describe('and is located in my products', () => {

    });

    describe('and is located in cart', () => {

    });
  });

  describe('and customer is logged in', () => {
    it('on initialization, values for customer are set correctly', () => {
      expect(component.user).toEqual(customer);
    });

    describe('and is located in product overview', () => {

    });

    describe('and is located in my products', () => {

    });

    describe('and is located in cart', () => {

    });
  });
});
