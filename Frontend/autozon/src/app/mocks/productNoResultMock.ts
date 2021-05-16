import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../core/models/product.model';
import { product } from './dataMocks';

export class ProductNoResultMockService {
  public fetchProductData(): BehaviorSubject<IProduct[]> {
    return new BehaviorSubject<IProduct[]>([]);
  }

  public fetchMyProductData(): BehaviorSubject<IProduct[]> {
    return new BehaviorSubject<IProduct[]>([]);
  }

  public deleteMyProduct(id: number): any {
    return new BehaviorSubject<JSON | undefined>(undefined);
  }

  public fetchDetailProductData(id: any): BehaviorSubject<IProduct> {
    return new BehaviorSubject<IProduct>(product);
  }

  public placeOrder(productIds: number[]): BehaviorSubject<JSON | undefined> {
    return new BehaviorSubject<JSON | undefined>(undefined);
  }
}
