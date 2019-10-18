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

    // Route Home & Dashboard
    Route::redirect('/', '/dashboard');
    
    // Routes of each modules
    Route::get('/create', function() {
        return view('pages.create');
    })->name('create');
    Route::get('/create/table', 'TableModuleController@create')->name('table.create');
    Route::get('/create/form');
    Route::get('/create/menu');

    // Routes of user update 
    Route::post('/dashboard', 'UserController@update')->name('user.update');

});

Route::get('/dashboard', 'HomeController@index')->name('dashboard');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/auth/redirect/{provider}', 'SocialController@redirect');
// Route::get('/callback/{provider}', 'SocialController@callback');

Route::get('login/{provider}', 'Auth\LoginController@redirectToProvider');
Route::get('login/{provider}/callback','Auth\LoginController@handleProviderCallback');
