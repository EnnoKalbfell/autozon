import { TestBed } from '@angular/core/testing';

import { ProductSearchService } from './product-search.service';
import ApiService from '../api/api.service';
import ApiMockService from 'src/app/mocks/apiMock.service';
import { car, carModel } from 'src/app/mocks/dataMocks';
import { BehaviorSubject } from 'rxjs';

describe('ProductSearchService', () => {
  let service: ProductSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useClass: ApiMockService }]
    });
    service = TestBed.inject(ProductSearchService);
  });

  describe('and fetchCarData is triggered', () => {
    it('should return correct data', () => {
      const result = service.fetchCarData();

      expect(result).toEqual(new BehaviorSubject([car]));
    });
  });

  describe('and fetchModels is triggered', () => {
    it('should return correct data', () => {
      const result = service.fetchModels();

      expect(result).toEqual(new BehaviorSubject([carModel]));
    });
  });
});
