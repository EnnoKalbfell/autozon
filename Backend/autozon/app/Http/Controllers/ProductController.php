<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class ProductController extends Controller
{
    /**
     * Show all products
     *
     * @return ['name','dealer','manufacturer','price','streetLegality','carId','shortDescription','category','serialNumber','preview','preview2','preview3']
     */
    public function getAllProducts()
    {
        $products = DB::table('product')->get();

        foreach($products as $product){
          $user = User::where('id', $product->dealer)->first();
          $product->dealerName = $user->companyName;
        }
        return $products;
    }

    public static function productById($id)
    {
      $product = Product::where('id', $id)->first();
      $user = User::where('id', $product->dealer)->first();
      $product->dealerName = $user->companyName;
      return $product;
    }
}