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

Route::get('/privacy', 'HomeController@privacy')->name('privacy');

Route::middleware(['auth'])->group(function() {

    // Route Home & Dashboard
    // Route::redirect('/', '/dashboard');
    
    // Routes of each modules
    Route::resource('project', 'ProjectController')->except(['create']);
    Route::get('/create', function() {
        return view('pages.create');
    })->name('project.create');

    Route::get('/create/{type}', 'ProjectController@create')->where('type', 'menu|table|form');;
    Route::get('/project/{type}/{id}', 'ProjectController@create')->where('type', 'menu|table|form')->where('id', '[0-9]+');

    // Routes of user update 
    Route::get('/user', 'UserController@index')->name('user.info');
    Route::post('/user/info', 'UserController@updateInfo')->name('user.update.info');
    Route::post('/user/password', 'UserController@updatePassword')->name('user.update.password');
    Route::post('/user/delete', 'UserController@destroy')->name('user.delete');    
    Route::get('/dashboard', 'HomeController@index')->name('dashboard');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/auth/redirect/{provider}', 'SocialController@redirect');
// Route::get('/callback/{provider}', 'SocialController@callback');

Route::get('login/{provider}', 'Auth\LoginController@redirectToProvider');
Route::get('login/{provider}/callback','Auth\LoginController@handleProviderCallback');

