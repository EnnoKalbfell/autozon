<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$router->group(['prefix' => 'api'], function () use ($router) {
    // Auth endpoint
    $router->group(['prefix' => 'auth'], function () use ($router) {
        $router->group(['prefix' => 'signup'], function () use ($router) {
            $router->post('customer', [UserController::class, 'createCustomer']);
            $router->post('dealer', [UserController::class, 'createDealer']);
        });
        $router->post('signin', [AuthController::class, 'login']);
        $router->post('signout', [AuthController::class, 'logout']);
        $router->post('refresh', [AuthController::class, 'refresh']);
    });
    // Product endpoint
    $router->group(['prefix' => 'product'], function () use ($router) {
        $router->post('create', [ProductController::class, 'createProduct']);
        $router->get('', [ProductController::class, 'getAllProducts']);
    });
});
