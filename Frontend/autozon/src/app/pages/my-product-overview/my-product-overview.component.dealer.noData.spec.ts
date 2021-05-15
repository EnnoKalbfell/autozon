import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductOverviewComponent } from './my-product-overview.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { product, dealer } from 'src/app/mocks/dataMocks';
import { LoginDealerMockService } from 'src/app/mocks/loginDealerMock';
import { ProductNoResultMockService } from 'src/app/mocks/productNoResultMock';
import { By } from '@angular/platform-browser';

describe('MyProductOverviewComponent > Dealer > No data', () => {
  let component: MyProductOverviewComponent;
  let fixture: ComponentFixture<MyProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductOverviewComponent ],
      providers: [
        { provide: ProductService, useClass: ProductNoResultMockService },
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
    expect(component.products).toEqual([]);
    expect(component.user).toEqual(dealer);
    expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toContain(
      'Es wurden keine von Ihnen erstellten Angebote gefunden.'
    );
  });
});
