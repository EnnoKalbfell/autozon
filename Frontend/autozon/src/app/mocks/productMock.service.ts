import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../core/models/product.model';
import { product } from './dataMocks';
import { Injectable } from '@angular/core';
import { StorageMock } from './storageMock';

export class ProductMockService {
  public fetchProductData(): BehaviorSubject<IProduct[]> {
    const array: IProduct[] = [];
    array.push(product);
    return new BehaviorSubject<IProduct[]>(array);
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
@Injectable()
export class ProductIdMockService {
  public sharedData: number;
  public storageMock: StorageMock = new StorageMock();

  constructor() {
    this.sharedData = 0;
  }

  public setId(id: number): void {
    this.storageMock.setItem('productId', JSON.stringify(id));
  }

  public getId(): number {
    this.sharedData = Number(this.storageMock.getItem('productId'));
    return this.sharedData;
  }
}
