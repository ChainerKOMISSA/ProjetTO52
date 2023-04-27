<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use GuzzleHttp\Client;


Route::get('/', [App\Http\Controllers\HomeController::class, 'acceuil'])-> name('acceuil');

Route::post('/login', [LoginController::class, 'login'])-> name('connexion');

Route::get('/login', [App\Http\Controllers\LoginController::class, 'index'])-> name('loginpage');

//Route::get('/protected', function () {})->middleware('auth');

Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])-> name('home');

