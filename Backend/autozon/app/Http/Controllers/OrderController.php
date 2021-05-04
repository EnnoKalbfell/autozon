<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller {
  /**
   * Create a new AuthController instance.
   * @return void
   */
  public function __construct() {}

  /**
   * Place new order
   * @return \Illuminate\Http\JsonResponse
   */
  public function placeOrder(Request $request) {
    // Get authenticated user
    $authController = new AuthController;
    $user = $authController->authenticatedUser();

    // Return error if user is not authorized to order products
    if (!$user || $user->role !== 'customer') {
      return response()->json(['error' => 'Unauthorized'], 401);
    }

    try {
      // Server-side input validation
      $this->validate($request, [
        'productIds' => 'required'
      ]);

      $orderId = DB::table('userOrder')->insertGetId([            
        'userId' => $user->id,
        'created_at' => DB::raw('CURRENT_TIMESTAMP'),
        'updated_at' => DB::raw('CURRENT_TIMESTAMP')
      ]);

      foreach ($request->input('productIds') as $id) {
        DB::table('product_order')->insert([
          'orderId' => $orderId,
          'productId' => $id
        ]);
      }

      return response()->json(['msg' => 'Created successfully'], 201);
    } catch (Exception $exception) {
      return response()->json(['error' => 'Entry in database has failed!'], 400);
    }
  }
}

