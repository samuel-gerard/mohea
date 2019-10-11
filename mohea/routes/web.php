<?php

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

Route::get('/', function () {
    return view('home');
})->name('home');

Route::middleware(['auth'])->group(function() {
    Route::redirect('/', '/dashboard');
    
    Route::get('/create', function() {
        return view('pages.create');
    })->name('create');
    Route::get('/create/table', 'TableModuleController@create')->name('table.create');
    Route::get('/create/form');
    Route::get('/create/menu');

});

Route::get('/dashboard', 'HomeController@index')->name('dashboard');
Auth::routes();

