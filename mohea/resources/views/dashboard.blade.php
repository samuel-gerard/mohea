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

            @if ( file_exists(public_path(asset('storage/' . Auth::user()->avatar))) )
                <img class="avatar" src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->name }}'s profile picture">
            @elseif ( Auth::user()->avatar !== null )
                <img class="avatar" src="{{ asset('storage/' . Auth::user()->avatar) }}" alt="{{ Auth::user()->name }}'s profile picture">
            @endif

            <p class="name">{{ Auth::user()->name }}</p>
            <p class="email">{{ Auth::user()->email }}</p>
            <a class="button" href="{{ route('user.info') }}">Edit your account</a>
        </div>
    </div>
    <div class="content">
        <h1 class="t-center">Dashboard</h1>
        <p class="t-center">You can see here your recent projects and create new ones</p>
        <div class="create">
            <a class="button" href="/create/table"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><rect width="34" height="34" rx="5.1" style="fill:#ff931e"/><rect x="16" y="7.5" width="2" height="19" rx="1" style="fill:#fff"/><rect x="16" y="7.5" width="2" height="19" rx="1" transform="translate(34 0) rotate(90)" style="fill:#fff"/></g></g></svg>Create a new table</a>
            <a class="button" href="/create/form"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><circle cx="17" cy="17" r="17" style="fill:#7ac943"/><rect x="16" y="7.5" width="2" height="19" rx="1" style="fill:#fff"/><rect x="16" y="7.5" width="2" height="19" rx="1" transform="translate(34 0) rotate(90)" style="fill:#fff"/></g></g></svg>Create a new form</a>
            <a class="button" href="/create/menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.24 34.85"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M22.44,33.22,38.8,4.89A3.26,3.26,0,0,0,36,0H3.26A3.26,3.26,0,0,0,.44,4.89L16.8,33.22A3.26,3.26,0,0,0,22.44,33.22Z" style="fill:#3fa9f5"/><rect x="18.62" y="3.92" width="2" height="19" rx="1" style="fill:#fff"/><rect x="18.62" y="3.92" width="2" height="19" rx="1" transform="translate(33.04 -6.2) rotate(90)" style="fill:#fff"/></g></g></svg>Create a new menu</a>
        </div>
        <div id="app-listing" class="list"></div>
    </div>
</main>
<footer>
    <div class="footer-links">
        <a class="link action" href="{{ route('help') }}">I need help</a>
        <a class="link info" href="{{ route('privacy') }}">Terms of use</a>
        <span>Copyright Mohea © 2020</span>
    </div>
</footer>
@endsection

@section('scripts-end')
    <script src="{{ mix('/js/ListingApp.js') }}"></script>
@endsection