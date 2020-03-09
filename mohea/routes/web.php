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

// Base routes
Route::get('/', 'HomeController@index')->name('home');
Route::get('/privacy', 'HomeController@privacy')->name('privacy');
Route::get('/help', 'HomeController@help')->name('help');

Route::middleware('auth')->group(function() {
    
    // Routes of each modules
    Route::resource('project', 'ProjectController')->except(['create']);
    Route::get('/create', function() {
        return view('pages.create');
    })->name('project.create');

    // Route for list of projects
    Route::get('/create/{type}', 'ProjectController@create')->where('type', 'menu|table|form');;
    Route::get('/project/{type}/{id}', 'ProjectController@create')->where('type', 'menu|table|form')->where('id', '[0-9]+');

    // Routes of user update 
    Route::get('/user', 'UserController@index')->name('user.info');
    Route::post('/user/info', 'UserController@updateInfo')->name('user.update.info');
    Route::post('/user/password', 'UserController@updatePassword')->name('user.update.password');
    Route::post('/user/picture', 'UserController@updatePicture')->name('user.update.picture');
    Route::post('/user/delete', 'UserController@destroy')->name('user.delete');    
    Route::get('/dashboard', 'HomeController@dashboard')->name('dashboard');
    Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

});

// Generate routes of authentication Laravel
Auth::routes();

// Connexion with Google/Facebook/Github
Route::get('login/{provider}', 'Auth\LoginController@redirectToProvider');
Route::get('login/{provider}/callback','Auth\LoginController@handleProviderCallback');

