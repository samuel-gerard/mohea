@extends('base')

@section('title')
    Mohea - Create Table
@endsection

@section('main-content')
    <div id="app-table"></div>
@endsection

@section('scripts-end')
    <script src="{{ mix('/js/modules/TableApp.js') }}"></script>
@endsection
