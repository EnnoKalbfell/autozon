<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {
  /**
   * Create a new AuthController instance.
   * @return void
   */
  public function __construct() {
    $this->middleware('auth:api', ['except' => ['login', 'register']]);
  }

  /**
   * Get a JWT via given credentials.
   * @return \Illuminate\Http\JsonResponse
   */
  public function login(Request $request) {
    // Server-side input validation
    $this->validate($request, [
      'email' => 'required|email',
      'password' => 'required'
    ]);

    // Login credentials from the post body
    $credentials = $request->only(['email', 'password']);

    // Get user by email
    $user = UserController::userByEmail($credentials['email']);

    // Sets token and implements user role, if authentication was successful
    $token = Auth::claims([
      'id' => $user->id,
      'role' => $user->role,
      'email' => $credentials['email'],
      'firstName' => $user->firstName,
      'lastName' => $user->lastName
    ])->attempt($credentials);

    // Throw an error if unsuccessful
    if (!$token) {
      return response()->json(['error' => 'Unauthorized'], 401);
    }

    // Response creation
    $response = $this->respondWithToken($token);
    return $response;
  }

  /**
   * Log the user out (Invalidate the token).
   * @return \Illuminate\Http\JsonResponse
   */
  public function logout() {
    auth()->logout();
    return response()->json(['message' => 'Successfully logged out']);
  }

  /**
   * Refresh a token.
   * @return \Illuminate\Http\JsonResponse
   */
  public function refresh() {
    return $this->respondWithToken(auth()->refresh());
  }

  /**
   * Get the token array structure.
   * @param  string $token
   * @return \Illuminate\Http\JsonResponse
   */
  protected function respondWithToken($token) {
    return response()->json([
      'access_token' => $token,
      'token_type' => 'bearer',
      'expires_in' => Auth::factory()->getTTL() * 60
    ]);
  }
}

