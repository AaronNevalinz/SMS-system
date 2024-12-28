<?php

use AfricasTalking\SDK\AfricasTalking;
use App\Http\Controllers\AfricasTalkingApi;
use App\Http\Controllers\CampaignController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::post('/africastalking', [AfricasTalkingApi::class, 'sendSMS']);

// create a campaign
// Route::post('/createCampaign', [CampaignController::class, 'store']);
// Route::post('/createCampaign', [CampaignController::class, 'store']);

Route::resource('campaign', CampaignController::class);