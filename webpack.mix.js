const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/form.scss', 'public/css')
   .js('resources/js/app.js', 'public/js')
   .js('resources/js/modules/form/FormApp.js', 'public/js/modules')
   .js('resources/js/modules/table/TableApp', 'public/js/modules')
   .js('resources/js/modules/menu/MenuApp', 'public/js/modules')
   .js('resources/js/listing/ListingApp', 'public/js')