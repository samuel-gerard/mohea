@extends('base')

@section('title')
    My dashboard | Mohea
@endsection

@section('main-content')
<nav id="header" class="header min show-logo">
    <ul class="d-flex jc-e ai-c">
        <li class="new"><a class="button primary" href="{{ route('project.create') }}">New project</a></li>
        <li class="logo ml-auto mr-auto"><img src="images/logo_medium.png" alt="Logo of Mohea" draggable="false"></li>
        @if (Auth::check())
            <li><a class="link action" href="">Log out</a></li>
        @endif
    </ul>
</nav>
<main class="dashboard">
    <div class="profile">
        <h2>Your profile</h2>
        <img src="{{ Auth::user()->avatar }}" alt="" width="20px">
        <span class="name">{{ Auth::user()->name }}</span>
        <span class="email">{{ Auth::user()->email }}</span>
    </div>
    <div class="content">
        <h1>Dashboard</h1>
        <p>You can see here your recent projects and create new ones</p>
        <div id="app-listing"></div>
    </div>
</main>
<div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <div class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                <img src="{{ Auth::user()->avatar }}" alt="" width="20px">
                                {{ Auth::user()->name }}
                                    <span class="caret"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        </div>
                    @else
                        <a href="/login">Login</a>
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
        </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h1>Dashboard</h1>
                    </div>
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        You are logged in!
                        <p>
                            <a href="{{ route('project.create') }}">Create</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        @include('components.editUser')
    </div>
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