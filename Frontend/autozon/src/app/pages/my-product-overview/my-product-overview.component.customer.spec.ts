import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductOverviewComponent } from './my-product-overview.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { customer } from 'src/app/mocks/dataMocks';
import { LoginCustomerMockService } from 'src/app/mocks/loginCustomerMock';
import { ProductCustomerMockService } from 'src/app/mocks/productCustomerMock';

describe('MyProductOverviewComponent > Customer', () => {
  let component: MyProductOverviewComponent;
  let fixture: ComponentFixture<MyProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductOverviewComponent ],
      providers: [
        { provide: ProductService, useClass: ProductCustomerMockService },
        { provide: LoginService, useClass: LoginCustomerMockService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('on initialization, values should be set correctly', () => {
    expect(component.products).toEqual([]);
    expect(component.user).toEqual(customer);
  });
});
