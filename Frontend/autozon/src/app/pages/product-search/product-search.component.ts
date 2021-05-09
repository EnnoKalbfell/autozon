import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/core/models/car.model';
import { ICarModel } from 'src/app/core/models/carmodel.model';
import { ProductSearchService } from 'src/app/core/services/product-serarch/product-search.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent implements OnInit {
  cars: ICar[] = [];
  carModels: ICarModel[] = [];
  brand = '';
  selectedBrand = '';
  selectedModel = '';

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit(): void {
    this.productSearchService.fetchCarData().subscribe((res) => {
      if (res !== undefined) {
        this.cars = res;
      }
    });
  }

  getModelsFromBrand(brand: string): void {
    this.productSearchService.fetchModels(brand).subscribe((res) => {
      if (res !== undefined) {
        this.carModels = res;
      }
    });
    this.selectedBrand = brand;
  }

  filterForResult(model: string): void {
    this.selectedModel = model;
  }

  submitFormData(): void {
    if (this.selectedModel !== '' || this.selectedBrand !== '') {
      
      this.productSearchService.safeSelectedValue(
        this.selectedBrand,
        this.selectedModel
      )
      console.log(this.productSearchService.getBrandAndModel());
      
    }
  }
}
