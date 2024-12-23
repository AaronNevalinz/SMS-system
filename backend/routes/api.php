<?php

use AfricasTalking\SDK\AfricasTalking;
use App\Http\Controllers\AfricasTalkingApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::post('/africastalking', [AfricasTalkingApi::class, 'sendSMS']);