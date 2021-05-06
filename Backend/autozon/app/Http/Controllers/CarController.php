<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

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
}
