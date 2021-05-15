import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductOverviewComponent } from './my-product-overview.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { product, dealer } from 'src/app/mocks/dataMocks';
import { LoginDealerMockService } from 'src/app/mocks/loginDealerMock';
import { ProductDealerMockService } from 'src/app/mocks/productDealerMock';

describe('MyProductOverviewComponent > Dealer', () => {
  let component: MyProductOverviewComponent;
  let fixture: ComponentFixture<MyProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductOverviewComponent ],
      providers: [
        { provide: ProductService, useClass: ProductDealerMockService },
        { provide: LoginService, useClass: LoginDealerMockService }
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
    expect(component.products).toEqual([product]);
    expect(component.user).toEqual(dealer);
  });
});
