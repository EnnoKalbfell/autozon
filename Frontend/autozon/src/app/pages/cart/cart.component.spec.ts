import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { ProductService } from 'src/app/core/services/product/product.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { By } from '@angular/platform-browser';
import { IUser } from 'src/app/core/models/user.model';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        { provide: LoginService, useClass: LoginMockService },
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
      expect(component.user).toEqual(user);
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toContain(
        'Sie haben keine Rechte, Produkte zu bestellen.'
      );
    });
  });
});
