@extends('base')

@section('title')
    My dashboard | Mohea
@endsection

@section('main-content')
<nav id="header" class="header min show-logo">
    <ul class="d-flex jc-e ai-c">
        <li class="new"><a class="button primary" href="{{ route('project.create') }}">New project</a></li>
        <li class="logo ml-auto mr-auto"><a href="/"><img src="images/logo_medium.png" alt="Logo of Mohea" draggable="false"></a></li>
        @if (Auth::check())
            <li><a class="link action" href="{{ route('logout') }}">Log out</a></li>
        @endif
    </ul>
</nav>
<main class="dashboard">
    <div class="profile">
        <div class="my-card">
            <img class="avatar" src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->name }}'s profile picture">
            <p class="name">{{ Auth::user()->name }}</p>
            <p class="email">{{ Auth::user()->email }}</p>
            <a class="button" href="">Edit your account</a>
        </div>
    </div>
    <div class="content">
        <h1 class="t-center">Dashboard</h1>
        <p class="t-center">You can see here your recent projects and create new ones</p>
        <div id="app-listing" class="list"></div>
    </div>
</main>
{{-- @include('components.editUser') --}}
<footer>
    <div class="footer-links">
        <a class="link action" href="">I need help</a>
        <a class="link info" href="{{ route('privacy') }}">Terms of use</a>
        <span>Copyright Mohea © 2020</span>
    </div>
</footer>
@endsection

@section('scripts-end')
    <script src="{{ mix('/js/ListingApp.js') }}"></script>
@endsection