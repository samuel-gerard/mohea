@extends('base')

@section('title')
    Create a table | Mohea
@endsection

@section('main-content')
    <div id="app-table"></div>
    <footer>
        <div class="footer-links">
            <a class="link action" href="{{ route('help') }}">I need help</a>
            <a class="link info" href="{{ route('privacy') }}">Terms of use</a>
            <span>Original creation of the Mohea team. 2020</span>
        </div>
    </footer>
@endsection

@section('scripts-end')
    <script src="{{ mix('/js/modules/TableApp.js') }}"></script>
@endsection
