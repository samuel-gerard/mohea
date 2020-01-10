@extends('base')

@section('title')
    Mohea
@endsection

@section('main-content')
    <nav id="header" class="header">
        <ul class="d-flex jc-e ai-c">
            <li><a class="button primary">Start a new project</a></li>
            <li class="logo ml-auto mr-auto"><img src="logo_medium.png" alt="Logo of Mohea" draggable="false"></li>
            <li><a class="link primary">Create my account</a></li>
            <li><a class="link action">Log in</a></li>
        </ul>
    </nav>
    <main>
        <div id="home-screen" class="home-screen">
            <img id="home-screen-logo" class="home-screen-logo" src="logo_complete.png" alt="Logo of Mohea, your accessibility assistant" draggable="false">
            <div class="home-screen-content">
                <img class="home-screen-illustration" src="breathe.svg" alt="Group of people relaxing around a table" draggable="false">
                <div class="home-screen-text">
                    <p class="headline">Breathe, smile.</p>
                    <h1><span class="mohea">Mohea</span> is here to help you create <strong>accessible tables</strong>, <strong>forms</strong> and <strong>menus</strong>.</h1>
                    <a id="home-cta" class="button secondary home-cta">Learn more</a>
                </div>
            </div>
        </div>
        <div id="home-presentation" class="home-presentation">
            <ul class="conversation">
                <li class="from-user">I want to know more about you<span class="spine"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.82 37.95"><g><path d="M32.58,2c0,17,0,16,3.21,34.38.17,1-.46,1.83-1.4,1.57C29.71,36.6,14.58,31,2.58,31c-2.83,0-3-7-2.09-10.55C2.45,12.71,30.58-6,32.58,2Z" style="fill: #6c63ff" /></g></svg></span></li>
                <li class="from-mohea">I'm not very good at introducing myself, so here's a cool video about me 😎<span class="spine"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.12 60.72"><g><path d="M4.41,2.08c0,23.18,0,31.37-4.37,56.43C-.19,59.82.67,61,2,60.66c6.38-1.77,36.9-9.49,53.27-9.49,3.85,0-5.8-9.54-7-14.37C45.51,26.3,7.14-8.83,4.41,2.08Z" style="fill: #ff4757" /></g></svg></span></li>
            </ul>
        </div>
    </main>
@endsection