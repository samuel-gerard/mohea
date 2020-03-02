@extends('base')

@section('title')
    Mohea, your accessibility assistant
@endsection

@section('main-content')
    <nav id="header" class="header">
        <ul class="d-flex jc-e ai-c">
            @if (Auth::check())
                <li class="new"><a class="button primary" href="{{ route('project.create') }}">Start a new project</a></li>
            @else
                <li class="new"><a class="button primary" href="{{ route('register') }}">Start a new project</a></li>
            @endif
            <li class="logo ml-auto mr-auto"><a href="/"><img src="images/logo_medium.png" alt="Logo of Mohea" draggable="false"></a></li>
            @if (Auth::check())
                <li><a class="link primary" href="{{ route('dashboard') }}">Your dashboard</a></li>
            @else
                <li><a class="link primary" href="{{ route('register') }}">Create a new account</a></li>
                <li><a class="link action" href="{{ route('login') }}">Log in</a></li>
            @endif
        </ul>
    </nav>
    <main>
        <div id="home-screen" class="home-screen">
            <img id="home-screen-logo" class="home-screen-logo" src="images/logo_complete.png" alt="Logo of Mohea, your accessibility assistant" draggable="false">
            <div class="home-screen-content">
                <img class="home-screen-illustration" src="images/breathe.svg" alt="Group of people relaxing around a table" draggable="false">
                <div class="home-screen-text">
                    <p class="headline">Breathe, smile.</p>
                    <h1><span class="mohea">Mohea</span> is here to help you create <strong>accessible tables</strong>, <strong>forms</strong> and <strong>menus</strong>.</h1>
                    <button class="button primary only-mobile" href="{{ route('project.create') }}">Start a new project</button>
                    <button id="home-cta" class="button secondary home-cta">Learn more</button>
                </div>
            </div>
        </div>
        <div class="anchor" id="goToHomePresentation"></div>
        <div id="home-presentation" class="home-presentation">
            <ul class="conversation">
                <li class="from-user">I want to know more about you<svg class="spine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.82 37.95"><g><path d="M32.58,2c0,17,0,16,3.21,34.38.17,1-.46,1.83-1.4,1.57C29.71,36.6,14.58,31,2.58,31c-2.83,0-3-7-2.09-10.55C2.45,12.71,30.58-6,32.58,2Z" style="fill: #6c63ff" /></g></svg></li>
                <li class="from-mohea">I'm not very good at introducing myself, so here's a cool video about me 😎<svg class="spine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.12 60.72"><g><path d="M4.41,2.08c0,23.18,0,31.37-4.37,56.43C-.19,59.82.67,61,2,60.66c6.38-1.77,36.9-9.49,53.27-9.49,3.85,0-5.8-9.54-7-14.37C45.51,26.3,7.14-8.83,4.41,2.08Z" style="fill: #ff4757" /></g></svg></li>
            </ul>
            <div class="video">
                <iframe frameborder="0" width="720" height="405" src="https://www.dailymotion.com/embed/video/x2jdyv8" allowfullscreen=""></iframe>
            </div>
            <ul class="conversation">
                <li class="from-user">Wow, and how to start a project?<svg class="spine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.82 37.95"><g><path d="M32.58,2c0,17,0,16,3.21,34.38.17,1-.46,1.83-1.4,1.57C29.71,36.6,14.58,31,2.58,31c-2.83,0-3-7-2.09-10.55C2.45,12.71,30.58-6,32.58,2Z" style="fill: #6c63ff" /></g></svg></li>
                <li class="from-mohea light">To start creating accessible elements, simply click on the button below 👇<svg class="spine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.12 60.72"><g><path d="M4.41,2.08c0,23.18,0,31.37-4.37,56.43C-.19,59.82.67,61,2,60.66c6.38-1.77,36.9-9.49,53.27-9.49,3.85,0-5.8-9.54-7-14.37C45.51,26.3,7.14-8.83,4.41,2.08Z" style="fill: #ff4757" /></g></svg></li>
            </ul>
            <div class="attractive-button">
                @if (Auth::check())
                    <a class="button primary" href="{{ route('project.create') }}">Start a new project</a>
                @else
                    <a class="button primary" href="{{ route('register') }}">Start a new project</a>
                @endif
            </div>
            <ul class="conversation">
                <li class="from-user">But why make accessible websites?<svg class="spine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.82 37.95"><g><path d="M32.58,2c0,17,0,16,3.21,34.38.17,1-.46,1.83-1.4,1.57C29.71,36.6,14.58,31,2.58,31c-2.83,0-3-7-2.09-10.55C2.45,12.71,30.58-6,32.58,2Z" style="fill: #6c63ff" /></g></svg></li>
            </ul>
            <div class="text-blotch">
                <div class="content">
                    <div class="title">
                        <img src="images/people.svg" alt="People" draggable="false">
                        <h2>We live in a world where<br>everyone is different</h2>
                    </div>
                    <p class="left">You know, it’s important to let all your visitors access to your website, no matter if their vision, hearing or motor skills are impaired or not.</p>
                    <p class="right"><span class="mohea">Mohea</span> is here to help you include these people and allow them to access your website and use your tool.</p>
                </div>
            </div>
            <div class="circles">
                <h2 class="ta-center"><span class="mohea">Mohea</span> can...</h2>
                <div class="content">
                    <div class="circle">
                        <img src="images/time.png" alt="Time">
                        <span>save you time</span>
                    </div>
                    <div class="circle">
                        <img src="images/graph.png" alt="Graph">
                        <span>optimize your SEO</span>
                    </div>
                    <div class="circle">
                        <img src="images/coin.png" alt="Coin">
                        <span>increase your revenues</span>
                    </div>
                </div>
                <ul class="conversation">
                    <li class="from-mohea light">Well, I guess we've reached the end of the conversation, so if you're not convinced by the help I'm offering, there's nothing more I can do... 😭<svg class="spine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.12 60.72"><g><path d="M4.41,2.08c0,23.18,0,31.37-4.37,56.43C-.19,59.82.67,61,2,60.66c6.38-1.77,36.9-9.49,53.27-9.49,3.85,0-5.8-9.54-7-14.37C45.51,26.3,7.14-8.83,4.41,2.08Z" style="fill: #ff4757" /></g></svg></li>
                </ul>
            </div>
        </div>
    </main>
    <footer>
        <img class="desktop" src="images/footer.svg" alt="Congratulations, you reached the paradise" draggable="false">
        <img class="mobile" src="images/footer_mobile.svg" alt="Congratulations, you reached the paradise" draggable="false">
        <div class="footer-links">
            <a class="link" href="">I need help</a>
            <a class="link" href="{{ route('privacy') }}">Terms of use</a>
            <span>Copyright Mohea © 2020</span>
        </div>
    </footer>
@endsection