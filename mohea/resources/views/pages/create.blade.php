@extends('base')

@section('title')
    Create a new ?
@endsection

@section('main-content')
    <h1>What do you want to create today ?</h1>
    <a href="/create/table">+ Table</a>
    <a href="/create/menu">+ Menu</a>
    <a href="/create/form">+ Formulaire</a>
@endsection