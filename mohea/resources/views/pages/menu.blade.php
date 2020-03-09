@extends('base')

@section('title')
    Mohea - Create Menu
@endsection

@section('main-content')
    <div id="app-menu"></div>
@endsection

@section('scripts-end')
    <script src="{{ mix('/js/modules/MenuApp.js') }}"></script>
@endsection
