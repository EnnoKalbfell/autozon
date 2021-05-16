import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import ApiService from '../api/api.service';
import ApiMockService from 'src/app/mocks/apiMock.service';
import { product } from 'src/app/mocks/dataMocks';
import { BehaviorSubject } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useClass: ApiMockService }]
    });
    service = TestBed.inject(ProductService);
  });

  describe('and fetchProductData is triggered', () => {
    it('should return correct data', () => {
      const result = service.fetchProductData();

      expect(result).toEqual(new BehaviorSubject([product]));
    });
  });

  describe('and fetchMyProductData is triggered', () => {
    it('should return correct data', () => {
      const result = service.fetchMyProductData();

      expect(result).toEqual(new BehaviorSubject([product]));
    });
  });

  describe('and deleteMyProduct is triggered', () => {
    it('should return correct data', () => {
      const result = service.deleteMyProduct(1);

      expect(result).toEqual(new BehaviorSubject({success: 'successfull'}));
    });
  });

  describe('and fetchDetailProductData is triggered', () => {
    it('should return correct data', () => {
      const result = service.fetchDetailProductData(1);

      expect(result).toEqual(new BehaviorSubject(product));
    });
  });

  describe('and placeOrder is triggered', () => {
    it('should return correct data', () => {
      const result = service.placeOrder([1]);

      expect(result).toEqual(
        new BehaviorSubject(JSON.parse(JSON.stringify({success: 'successfull'})))
      );
    });
  });
});
