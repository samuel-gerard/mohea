@extends('base')

@section('title')
    Create a new project
@endsection

@section('main-content')
<div class="main-container">
    <a href="/"><img class="main-logo" src="/images/logo_medium.png" alt="Logo of Mohea" draggable="false"></a>
    <div class="create">
        <h1>What do you want to create today?</h1>
        <div class="select">
            <a class="button" href="/create/table"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><title>add</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><rect width="34" height="34" rx="5.1" style="fill:#ff931e"/><rect x="16" y="7.5" width="2" height="19" rx="1" style="fill:#fff"/><rect x="16" y="7.5" width="2" height="19" rx="1" transform="translate(34 0) rotate(90)" style="fill:#fff"/></g></g></svg>Table</a>
            <a class="button" href="/create/form"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><title>add_form</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><circle cx="17" cy="17" r="17" style="fill:#7ac943"/><rect x="16" y="7.5" width="2" height="19" rx="1" style="fill:#fff"/><rect x="16" y="7.5" width="2" height="19" rx="1" transform="translate(34 0) rotate(90)" style="fill:#fff"/></g></g></svg>Form</a>
            <a class="button" href="/create/menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.24 34.85"><title>add_menu</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M22.44,33.22,38.8,4.89A3.26,3.26,0,0,0,36,0H3.26A3.26,3.26,0,0,0,.44,4.89L16.8,33.22A3.26,3.26,0,0,0,22.44,33.22Z" style="fill:#3fa9f5"/><rect x="18.62" y="3.92" width="2" height="19" rx="1" style="fill:#fff"/><rect x="18.62" y="3.92" width="2" height="19" rx="1" transform="translate(33.04 -6.2) rotate(90)" style="fill:#fff"/></g></g></svg>Menu</a>
        </div>
    </div>
</div>
@endsection