<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TextController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * User authentication
 */
Route::post('login', [LoginController::class, 'login']);

/**
 * New User Registration
 */
Route::post('register', [LoginController::class, 'register']);

/**
 * Sign Out
 */
Route::post('logout', [LoginController::class, 'logout']);


/**
 * Get a list of cars
 */
Route::get('cars', [CarController::class, 'index']);

/**
 * Get car by ID
 */
Route::get('car/show/{id}', [CarController::class, 'show']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::prefix('text/')->group(function () {
        /**
         * Convert number by digits.
         */
        Route::post('numberOnDigit', [TextController::class, 'numberOnDigit']);

        /**
         * Remove spaces before punctuation marks.
         */
        Route::post('removeSpaces', [TextController::class, 'removeSpaces']);

        /**
         * Remove duplicate words
         */
        Route::post('removeDuplicateWords', [TextController::class, 'removeDuplicateWords']);
    });

    /**
     * Save the new car
     */
    Route::post('cars', [CarController::class, 'store']);

    /**
     * Update car
     */
    Route::put('car/update', [CarController::class, 'update']);

    /**
     * Delete car by ID
     */
    Route::delete('car/destroy/{id}', [CarController::class, 'destroy']);
});
