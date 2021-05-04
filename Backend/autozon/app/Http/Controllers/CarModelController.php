<?php

namespace App\Http\Controllers;

use App\Models\CarModel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarModelController extends Controller
{
    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show all car models
     * @return carModel[]
     */
    public function getAllCarsFromBrand(Request $request)
    {
        $carsFromBrand = DB::table('car')->where('carBrand', $request->input('brand'))->get();
        $models = [];
        foreach ($carsFromBrand as $brand) {
            $carModel = CarModel::where('id', $brand->carModelId)->first();
            array_push($models, $carModel);
        }
        return $models;
    }
}
