<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Car;
use App\Models\CarModel;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class ProductController extends Controller
{
  /**
   * Create a new controller instance.
   * @return void
   */
  public function __construct() {}

  /**
   * Show all products
   * @return Product[] $products
   */
  public function getAllProducts() {
    $products = DB::table('product')->where('hidden', false)->get();
    foreach ($products as $product) {
      $user = User::where('id', $product->dealer)->first();
      $product->dealer = $user;
      $car = Car::where('id', $product->carId)->first();
      $carModel = CarModel::where('id', $car->carModelId)->first();

      $car->carModel = $carModel;
      $product->car = $car;
    }
    return $products;
  }

  /**
   * Get one product by id
   * @param number $id
   * @return Product $product
   */
  public static function productById($id) {
    $product = Product::where('id', $id)->first();
    $car = Car::where('id', $product->carId)->first();
    $carModel = CarModel::where('id', $car->carModelId)->first();
    $user = User::where('id', $product->dealer)->first();
    $product->dealer = $user;
    $car->carModel = $carModel;
    $product->car = $car;
    return $product;
  }

  /**
   * Create a new product
   * @return \Illuminate\Http\JsonResponse
   */
  public function createProduct(Request $request) {
    // Get authenticated user
    $authController = new AuthController;
    $user = $authController->authenticatedUser();
    // Return error if user is not authorized to create a product
    if (!$user || $user->role !== 'dealer') {
      return response()->json(['error' => 'Unauthorized'], 401);
    }

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
        'dealer' => $user->id,
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
        'hidden' => false
      ]);
      return response()->json(['msg' => 'Created successfully'], 201);
    } catch (Exception $exception) {
      return response()->json(['error' => 'Entry in database has failed!'], 500);
    }
  }

  /**
   * Delete a product
   * @param number $id
   * @return \Illuminate\Http\JsonResponse
   */
  public function deleteProduct($id) {
    $product = Product::where('id', $id)->first();
    // Get authenticated user
    $authController = new AuthController;
    $user = $authController->authenticatedUser();
    // Return error if no product with this id was found
    if (!$product) {
      return response()->json(['error' => 'Not Found'], 404);
    }
    // Return error if user is not authorized to delete this product
    if (!$user || $user->role !== 'dealer' || $user->id !== $product->dealer) {
      return response()->json(['error' => 'Unauthorized'], 401);
    }
    // Try to delete product
    try {
      DB::table('product')->where('id', $id)->update(['hidden' => true]);
      return response()->json(['msg' => 'Deleted successfully'], 201);
    } catch (Exception $exception) {
      return response()->json(['error' => 'Could not delete product'], 500);
    }
  }
}
