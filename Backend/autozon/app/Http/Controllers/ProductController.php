<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
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
}