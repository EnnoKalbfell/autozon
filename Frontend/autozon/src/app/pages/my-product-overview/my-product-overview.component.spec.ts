import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductOverviewComponent } from './my-product-overview.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { product, dealer } from 'src/app/mocks/dataMocks';

describe('MyProductOverviewComponent', () => {
  let component: MyProductOverviewComponent;
  let fixture: ComponentFixture<MyProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductOverviewComponent ],
      providers: [
        { provide: ProductService, useValue: ProductMockService },
        { provide: LoginService, useValue: LoginMockService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Check why product service mock is not working
  it('on initialization, values should be set correctly', () => {
    expect(component.products).toEqual([product]);
    expect(component.user).toEqual(dealer);
  });
});
