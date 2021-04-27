<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
  /**
   * Create a new controller instance.
   * @return void
   */
  public function __construct()
  {
    //
  }

  /**
   * Show all products
   *
   * @return ['name','dealer','manufacturer','price','streetLegality','carId','shortDescription','category','serialNumber','preview','preview2','preview3']
   */
  public function getAllProducts()
  {
    return DB::table('product')->get();
  }

  public static function productById($id)
  {
    return Product::where('id', $id)->first();
  }

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
