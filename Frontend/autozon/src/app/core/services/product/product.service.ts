import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../models/product.model';
import ApiService from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) {}

  fetchProductData(): BehaviorSubject<IProduct[]> {
    const productSource$ = new BehaviorSubject<IProduct[]>([]);

    this.apiService.get('product').subscribe(response => {
      productSource$.next(response as IProduct[])
    })
    return productSource$;
  }   

  fetchDetailProductData(id: any): BehaviorSubject<IProduct> {
    const productSource$ = new BehaviorSubject<IProduct>({});

    this.apiService.get('product/' + id).subscribe(res => {
      productSource$.next(res as IProduct)
    })
    return productSource$
  }
}
@Injectable()
export class ProductIdService {
  public sharedData:number;

  constructor(){
    this.sharedData = 0;
  }

  setId(id:number){
    localStorage.setItem("productId", JSON.stringify(id));
  }

  getId(){
    this.sharedData = Number(localStorage.getItem("productId"));
    return this.sharedData

  }
}
