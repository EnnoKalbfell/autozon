<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\CarModel;

class CarController extends Controller
{
    /**
   * Create a new controller instance.
   * @return void
   */
  public function __construct() {}

  /**
   * Show all car models
   * @return carModel[]
   */
  public function getAllCarBrands() {
    return DB::table('car')->groupBy('carBrand')->get();
  }

  public function getAllCarBrandsAndModels() {
    $brands = DB::table('car')->get();
    foreach($brands as $brand){
      $model = CarModel::where('id', $brand->carModelId)->first();
      $brand->carModel = $model;
    }
    return $brands;
  }
}
