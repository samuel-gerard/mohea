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
            <li><a class="link primary" href="{{ route('dashboard') }}">Your dashboard</a></li>
        @endif
    </ul>
</nav>

<main class="dashboard">
    <h1>How to use Mohea</h1>
    
</main>
<footer>
    <div class="footer-links">
        <a class="link action" href="{{ route('help') }}">I need help</a>
        <a class="link info" href="{{ route('privacy') }}">Terms of use</a>
        <span>Copyright Mohea © 2020</span>
    </div>
</footer>
@endsection
