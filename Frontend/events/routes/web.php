<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use GuzzleHttp\Client;

//Connexions
Route::get('/login', [App\Http\Controllers\LoginController::class, 'index'])-> name('loginpage');
Route::post('/register', [App\Http\Controllers\LoginController::class, 'register'])-> name('register');
Route::post('/login', [App\Http\Controllers\LoginController::class, 'login'])-> name('login');

//Acceuil
Route::get('/', [App\Http\Controllers\HomeController::class, 'acceuil'])-> name('acceuil');
Route::get('/details', [App\Http\Controllers\HomeController::class, 'detailsfimu'])-> name('detailsfimu');

//Administrateur
Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])-> name('home');

//Evenement
Route::get('/addevent', [App\Http\Controllers\EventController::class, 'index'])-> name('newevent'); //afficher la page de création
Route::post('/newevent', [App\Http\Controllers\EventController::class, 'create']) -> name('createevent'); //créer un new event
Route::put('/updatevent/{idEvenement}', [App\Http\Controllers\EventController::class, 'update']) -> name('updatevent');//mettre à jour un évènement
Route::delete('/deletevent/{idEvenement}', [App\Http\Controllers\EventController::class, 'delete']) -> name('deletevent'); //supprimer un évènement

//Affichages des différents types d'évènements
Route::get('/concert',[App\Http\Controllers\EventController::class, 'listeconcert'])-> name('concert'); //afficher les concerts uniquement
Route::get('/festival',[App\Http\Controllers\EventController::class, 'listefestival'])-> name('festival'); //afficher les festivals uniquement

//Newsletter
Route::get('/createnewsletter', [App\Http\Controllers\NewsletterController::class, 'index']) -> name('createnewsletter'); //page de création de la newsletter
Route::post('addnewsletter', [App\Http\Controllers\NewsletterController::class, 'create']) -> name('addnewsletter');//créer une newsletter
Route::get('/newsletter', [App\Http\Controllers\NewsletterController::class, 'show']) -> name('newsletter'); //affichage des newsletter