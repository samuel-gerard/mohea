<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="lSEoBabnAq1DqFbV7-kNKBx-t1bhtzQn2zQCHjyPURI" />
        <title>
            @yield('title')
        </title>
        <link rel="shortcut icon" type="image/png" href="/favicon.png">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
        @yield('style')
    </head>
    <body>
        @yield('main-content')
        <script src="{{ mix('/js/app.js') }}"></script>
        @yield('scripts-end')
    </body>
</html>
