<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Car;
use App\Models\CarModel;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
   * Create a new controller instance.
   * @return void
   */
  public function __construct() {}

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

  /**
   * Create a new product
   */
  public function createProduct(Request $request)
  {
    try {
      // Server-side input validation
      $this->validate($request, [
        'name' => 'required|max:100',
        'dealer'  => 'required',
        'manufacturer'  => 'required:max150',
        'price'  => 'required',
        'streetLegality'  => 'required|boolean',
        'carId' => 'required',
        'shortDescription'  => 'required|max:200',
        'category'  => 'required|max:255',
        'serialNumber'  => 'required|max:100',
        'preview' => 'required|max:150',
        'preview2' => 'required|max:150',
        'preview3' => 'required|max:150'
      ]);

      DB::table('product')->insert([
        'name' => $request->input('name'),
        'dealer' => $request->input('dealer'),
        'manufacturer' => $request->input('manufacturer'),
        'price' => $request->input('price'),
        'streetLegality' => $request->input('streetLegality'),
        'carId' => $request->input('carId'),
        'shortDescription' => $request->input('shortDescription'),
        'category' => $request->input('category'),
        'serialNumber' => $request->input('serialNumber'),
        'preview' => $request->input('preview'),
        'preview2' => $request->input('preview2'),
        'preview3' => $request->input('preview3'),
      ]);
    } catch (Exception $exception) {
      return response()->json(['error' => 'Entry in database has failed!'], 400);
    }
  }
}
