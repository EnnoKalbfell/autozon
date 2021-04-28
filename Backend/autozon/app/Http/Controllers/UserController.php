<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
use App\Models\Car;
use App\Models\CarModel;
use Doctrine\Common\Annotations\Reader;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct() {}

    /**
     * Create new customer
     * @return [userId, email]
     */
    public function createCustomer(Request $request) {
      // Server-side input validation
      $this->validate($request, [
        'email' => 'required|email|unique:user',
        'password' => 'required'
      ]);

      try {
        $id = DB::table('user')->insertGetId([            
          'firstName' => $request->input('firstName'),
          'lastName' => $request->input('lastName'),
          'email' => $request->input('email'),
          'password' => Hash::make($request->input('password')),
          'phone' => $request->input('phone'),
          'streetAndHouseNumber' => $request->input('streetAndHouseNumber'),
          'zipCode' => $request->input('zipCode'),
          'city' => $request->input('city'),
          'country' => $request->input('country'),
          'role' => 'customer',
          'verified' => true
        ]);

        $user = $this->userById($id);

        return response()->json([
          'id' => $id,
          'email' => $user['email']
        ], 201);
      } catch (Exception $exception) {
        return response()->json(['error' => 'Entry in database has failed!'], 400);
      }
    }

    /**
     * Create new dealer
     * @return [userId, email]
     */
    public function createDealer(Request $request) {
      // Server-side input validation
      $this->validate($request, [
        'email' => 'required|email|unique:user',
        'password' => 'required'
      ]);

      try {
        $id = DB::table('user')->insertGetId([            
          'firstName' => $request->input('firstName'),
          'lastName' => $request->input('lastName'),
          'companyName' => $request->input('companyName'),
          'email' => $request->input('email'),
          'password' => Hash::make($request->input('password')),
          'phone' => $request->input('phone'),
          'streetAndHouseNumber' => $request->input('streetAndHouseNumber'),
          'zipCode' => $request->input('zipCode'),
          'city' => $request->input('city'),
          'country' => $request->input('country'),
          'role' => 'dealer',
          'verified' => true // TODO: set to false and implement admin verification
        ]);

        $user = $this->userById($id);

        return response()->json([
          'id' => $id,
          'email' => $user['email']
        ], 201);
      } catch (Exception $exception) {
        return response()->json(['error' => 'Entry in database has failed!'], 400);
      }
    }

    /**
     * Get user by user's email
     * @return $user
     */
    public static function userByEmail($email) {
      return User::where('email', $email)->first();
    }

    /**
     * Get user by user's id
     * @return $user
     */
    public static function userById($id) {
      return User::where('id', $id)->first();
    }

    /**
     * Get products created by authenticated user
     * @return Product[]
     */
    public function productsOfUser() {
      // Get authenticated user
      $authController = new AuthController;
      $user = $authController->me();
      // Search all products of authenticated user
      $products = Product::where('dealer', $user->id)->get();
      foreach ($products as $product) {
        $car = Car::where('id', $product->carId)->first();
        $carModel = CarModel::where('id', $car->carModelId)->first();
  
        $car->carModel = $carModel;
        $product->car = $car;
      }
      return $products;
    }
}
