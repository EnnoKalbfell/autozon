import { IUser } from '../core/models/user.model';
import { IProduct } from '../core/models/product.model';
import { ICar } from '../core/models/car.model';
import { ICarModel } from '../core/models/carmodel.model';
import { ICartModel } from '../core/models/cart.model';

export const dealer: IUser = {
  id: 1,
  lastName: 'Smith',
  firstName: 'Will',
  companyName: 'Awesome',
  email: 'will.smith@test.ch',
  phone: '0791112233',
  streetAndHouseNumber: 'Teststreet 77',
  zipCode: '3322',
  city: 'Testcity',
  country: 'Switzerland',
  role: 'dealer',
  verified: true
};

export const customer: IUser = {
  id: 2,
  lastName: 'Johnson',
  firstName: 'Billy',
  companyName: 'Awesome',
  email: 'billy.johnson@test.ch',
  phone: '0785553399',
  streetAndHouseNumber: 'Teststreet 79',
  zipCode: '3322',
  city: 'Testcity',
  country: 'Switzerland',
  role: 'customer',
  verified: true
};

export const carModel: ICarModel = {
  id: 1,
  carModel: 'Smart',
  carModelYear: 2020,
  fuel: 'Diesel',
  engineNumber: '234524',
  vinNumber: '231123'
};

export const car: ICar = {
  id: 1,
  carBrand: 'Smart',
  carModelId: 1,
  carModel: carModel
};

export const product: IProduct = {
  id: 1,
  name: 'Testproduct',
  dealer: dealer,
  manufacturer: 'Manufacturer',
  price: 35.25,
  streetLegality: true,
  carId: 1,
  shortDescription: 'This is a testproduct.',
  description: 'The testproduct is amazing for everything.',
  category: 'Allround',
  serialNumber: '2134k4526ksd',
  preview: 'preview',
  car: car
};

export const singleCart: ICartModel = {
  id: 1,
  amount: 1,
  name: 'Testproduct',
  dealer: dealer,
  manufacturer: 'Manufacturer',
  price: 35.25,
  streetLegality: true,
  carId: 1,
  shortDescription: 'This is a testproduct.',
  description: 'The testproduct is amazing for everything.',
  category: 'Allround',
  serialNumber: '2134k4526ksd',
  preview: 'preview',
  car: car
};