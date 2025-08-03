<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\DeputyController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::group(['prefix'=> 'v1'], function () {
    Route::get('/deputies', [DeputyController::class, 'index'])->name('deputies');
    Route::get('/deputies/{id}/expenses', [ExpenseController::class, 'show'])->name('expenses');
});

