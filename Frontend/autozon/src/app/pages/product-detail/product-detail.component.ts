import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { ProductIdService, ProductService } from 'src/app/core/services/product/product.service';
import { IUser } from 'src/app/core/models/user.model';
import { LoginService } from 'src/app/core/services/login/login.service';
import { ICartModel } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct = {};
  user: IUser = {
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
  route: string = window.location.pathname;

  constructor(
    private productIdService: ProductIdService,
    private productService: ProductService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    const id = this.productIdService.getId();

    this.productService.fetchDetailProductData(id).subscribe(res => {
      if (res !== undefined) {
        this.product = res;
      }
    });
    // Get currently authenticated user
    this.loginService.getUser().subscribe(res => {
      if (res !== undefined) {
        this.user = res;
      }
    });
  }

  /**
   * Show cart button if authenticated user is customer and not on my-product page
   */
  showCartButton(): boolean {
    if (this.user.role === 'customer' && this.route !== '/my-products') {
      return true;
    }
    return false;
  }

  /**
   * Add product to cart array in session storage
   */
  addToCart(): void {
    if (this.product.id && this.user.role === 'customer') {
      const cartContent: string = sessionStorage.getItem('cart') || '[]';
      const cartArray: ICartModel[] = JSON.parse(cartContent);
      let found = false;

      cartArray.forEach((entry: ICartModel) => {
        // Increase amount if product is already in cart
        if (entry.id === this.product.id) {
          entry.amount += 1;
          found = true;
        }
      });

      // Add new entry in cart array
      if (!found) {
        cartArray.push({
          id: this.product.id,
          amount: 1
        });
      }

      // Save to sessions storage
      sessionStorage.setItem('cart', JSON.stringify(cartArray));
    }
  }
}
