@extends('base')

@section('title')
    Create a new ?
@endsection

@section('main-content')
    <h1>What do you want to create today ?</h1>
    <a href="{{ route('table.create') }}">+ Table</a>
@endsection