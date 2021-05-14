import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchComponent } from './product-search.component';
import { ProductSearchService } from 'src/app/core/services/product-serarch/product-search.service';
import { ProductSearchMockService } from '../../mocks/productSearchMock.service';
import { car } from 'src/app/mocks/dataMocks';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchComponent ],
      providers: [
        { provide: ProductSearchService, useValue: ProductSearchMockService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Check why product search service moc is not working correctly
  it('on initialization, data should be set correctly', () => {
    expect(component.cars).toEqual([car]);
    expect(component.carModels).toEqual([]);
    expect(component.brand).toEqual('');
    expect(component.selectedBrand).toEqual('');
    expect(component.selectedModel).toEqual('');
  });

  describe('and brand is selected', () => {
    it('brand value should be set correctly', () => {

    });

    it('correct models should be displayed', () => {

    });

    describe('and model is selected', () => {
      it('model value should be set correctly', () => {

      });

      describe('and submit button is clicked', () => {
        it('submit function gets triggered', () => {

        });
      });
    })
  });
});
