@extends('base')

@section('title')
    Mohea - Create Form
@endsection

@section('style')
    <link rel="stylesheet" href="{{ mix('/css/form.css') }}">
@endsection

@section('main-content')
    <div id="app-form"></div>
@endsection

@section('scripts-end')
    <script src="{{ mix('/js/modules/FormApp.js') }}"></script>
@endsection