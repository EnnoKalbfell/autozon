<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Car;
use App\Models\CarModel;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
  /**
   * Show all products
   * @return Product[]
   */
  public function getAllProducts()
  {
    $products = DB::table('product')->get();
    foreach ($products as $product) {
      $car = Car::where('id', $product->carId)->first();
      $carModel = CarModel::where('id', $car->carModelId)->first();

      $car->carModel = $carModel;
      $product->car = $car;
    }
    return $products;
  }

  /**
   * Get one product by id
   * @return Product
   */
  public static function productById($id)
  {
    $product = Product::where('id', $id)->first();
    $car = Car::where('id', $product->carId)->first();
    $carModel = CarModel::where('id', $car->carModelId)->first();

    $car->carModel = $carModel;
    $product->car = $car;
    return $product;
  }
}