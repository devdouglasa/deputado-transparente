<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
<<<<<<< HEAD
use App\Http\Controllers\DeputyController;
=======
>>>>>>> f3c855b57906ac0773e61bf1a4c168312795be5e

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
<<<<<<< HEAD


Route::group(['prefix'=> 'v1'], function () {
    Route::get('/deputies', [DeputyController::class, 'index'])->name('deputies');
});
=======
>>>>>>> f3c855b57906ac0773e61bf1a4c168312795be5e
