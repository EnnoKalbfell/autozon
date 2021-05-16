import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../core/models/product.model';
import { product } from './dataMocks';

export class ProductDealerMockService {
  public fetchProductData(): BehaviorSubject<IProduct[]> {
    const array: IProduct[] = [];
    array.push(product);
    return new BehaviorSubject<IProduct[]>(array);
  }

  public fetchMyProductData(): BehaviorSubject<IProduct[]> {
    const array: IProduct[] = [];
    array.push(product);
    return new BehaviorSubject<IProduct[]>(array);
  }

  public deleteMyProduct(id: number): any {
    return new BehaviorSubject<JSON | undefined>(
      JSON.parse(JSON.stringify(id))
    );
  }

  public fetchDetailProductData(id: any): BehaviorSubject<IProduct> {
    return new BehaviorSubject<IProduct>(product);
  }

  public placeOrder(productIds: number[]): BehaviorSubject<JSON | undefined> {
    return new BehaviorSubject<JSON | undefined>(undefined);
  }
}
