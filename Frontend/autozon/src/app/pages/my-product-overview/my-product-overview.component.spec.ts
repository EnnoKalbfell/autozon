import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductOverviewComponent } from './my-product-overview.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ProductMockService } from 'src/app/mocks/productMock.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { IUser } from 'src/app/core/models/user.model';
import { By } from '@angular/platform-browser';

describe('MyProductOverviewComponent > Visitor', () => {
  let component: MyProductOverviewComponent;
  let fixture: ComponentFixture<MyProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductOverviewComponent ],
      providers: [
        { provide: ProductService, useClass: ProductMockService },
        { provide: LoginService, useClass: LoginMockService }
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

    expect(component.products).toEqual([]);
    expect(component.user).toEqual(user);
    expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toContain(
      'Sie haben keine Rechte, eigene Produkte zu erstellen.'
    );
  });
});
