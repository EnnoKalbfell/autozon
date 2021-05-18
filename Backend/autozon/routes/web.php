<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\CarModelController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;

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

$router->group([
    'prefix' => 'api',
    'middleware' => 'api'
], function () use ($router) {
    // Auth endpoint
    $router->group(['prefix' => 'auth'], function () use ($router) {
        $router->group(['prefix' => 'signup'], function () use ($router) {
            $router->post('customer', [UserController::class, 'createCustomer']);
            $router->post('dealer', [UserController::class, 'createDealer']);
        });
        $router->post('signin', [AuthController::class, 'login']);
        $router->post('signout', [AuthController::class, 'logout']);
        $router->post('refresh', [AuthController::class, 'refresh']);
        $router->post('authenticatedUser', [AuthController::class, 'authenticatedUser']);
    });
    // Product endpoint
    $router->group(['prefix' => 'product'], function () use ($router) {
        $router->post('create', [ProductController::class, 'createProduct']);
        $router->get('', [ProductController::class, 'getAllProducts']);
        $router->put('{id}/delete', [ProductController::class, 'deleteProduct']);
        $router->get('{id}', [ProductController::class, 'productById']);
    });
    // User endpoint
    $router->group(['prefix' => 'user'], function () use ($router) {
        $router->get('products', [UserController::class, 'productsOfUser']);
    });
    // Order endpoint
    $router->group(['prefix' => 'order'], function () use ($router) {
        $router->post('', [OrderController::class, 'placeOrder']);
    });

    $router->group(['prefix' => 'car'], function () use ($router) {
        $router->get('model', [CarModelController::class, 'getAllCarsFromBrand']);
        $router->get('', [CarController::class, 'getAllCarBrands']);
        $router->get('brand/model', [CarController::class, 'getAllCarBrandsAndModels']);
    });
});
