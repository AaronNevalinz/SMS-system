<?php

use App\Http\Controllers\AfricasTalkingApi;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CampaignController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
return response()->json([
    'user' => $request->user(),
    'connects' => $request->user()->connects,
]);
})->middleware('auth:sanctum');


Route::post('/africastalking', [AfricasTalkingApi::class, 'sendSMS']);

// create a campaign
// Route::post('/createCampaign', [CampaignController::class, 'store']);
// Route::post('/createCampaign', [CampaignController::class, 'store']);

Route::resource('campaign', CampaignController::class);

// auth routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');