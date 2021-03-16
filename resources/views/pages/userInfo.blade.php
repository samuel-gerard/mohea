@extends('base')

@section('title')
    Edit your account | Mohea
@endsection

@section('main-content')
<nav id="header" class="header min show-logo">
    <ul class="d-flex jc-e ai-c">
        <li class="new"><a class="button primary" href="{{ route('project.create') }}">New project</a></li>
        <li class="logo ml-auto mr-auto"><a href="/"><img src="images/logo_medium.png" alt="Logo of Mohea" draggable="false"></a></li>
        @if (Auth::check())
            <li><a class="link primary" href="{{ route('dashboard') }}">Your dashboard</a></li>
            <li><a class="link action" href="{{ route('logout') }}">Log out</a></li>
        @endif
    </ul>
</nav>

<div class="main-container">
    <a href="/"><img class="main-logo" src="/images/logo_medium.png" alt="Logo of Mohea" draggable="false"></a>
    <div class="user">
        <h1>Edit your account</h1>
        @if(session()->has('message'))
            <div class="alert alert-success">
                {{ session()->get('message') }}
            </div>
        @endif
        <h2>General information</h2>
        <form method="POST" name="edit_user_info" action="{{ route('user.update.info') }}">
            @csrf
            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>
                <div class="col-md-6">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror"
                        name="name" value="{{ Auth::user()->name }}" required autocomplete="name" autofocus>
                    @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="email"
                    class="col-md-4 col-form-label text-md-right">{{ __('E-mail eddress') }}</label>
                <div class="col-md-6">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                        name="email" value="{{ Auth::user()->email }}" required autocomplete="email">
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="submit-block">
                <button type="submit" value="info" class="button secondary">
                    {{ __('Save information') }}
                </button>
            </div>
        </form>
        <h2>Profile picture</h2>
        <form method="POST" name="edit_user_image" action="{{ route('user.update.picture') }}" enctype="multipart/form-data">
            @csrf
            @if ( strpos(Auth::user()->avatar, 'http') === 0 )
                <img class="avatar" id="your-image" src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->name }}'s profile picture" width="200px">
            @elseif ( Auth::user()->avatar !== null )
                <img class="avatar" id="your-image" src="{{ asset('storage/' . Auth::user()->avatar) }}" alt="{{ Auth::user()->name }}'s profile picture" width="200px">                            
            @endif
            <div class="mb-3 custom-file">
                <input required type="file" class="custom-file-input form-control-file @error('avatar') is-invalid @enderror" id="validatedCustomFile" name ="avatar" >
                <label class="custom-file-label" for="validatedCustomFile">Upload a picture</label>
                @error('avatar')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>
            <div class="submit-block">
                <button type="submit" value="avatar" class="button secondary">
                    {{ __('Save picture') }}
                </button>
            </div>
        </form>
        <h2>Change your password</h2>
        <form method="POST" name="edit_user_password" action="{{ route('user.update.password') }}">
            @csrf
            <div class="form-group row">
                <label for="password"
                    class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>
                <div class="col-md-6">
                    <input id="password" type="password"
                        class="form-control @error('password') is-invalid @enderror" name="password"
                        required autocomplete="new-password">
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="password-confirm"
                    class="col-md-4 col-form-label text-md-right">{{ __('Password (again, to prevent typing error)') }}</label>
                <div class="col-md-6">
                    <input id="password-confirm" type="password" class="form-control"
                        name="password_confirmation" required autocomplete="new-password">
                </div>
            </div>
            <div class="submit-block">
                <button type="submit" value="password" class="button primary">
                    {{ __('Change password') }}
                </button>
            </div>
        </form>
        <h2>Permanently delete your account</h2>
        <form method="POST" name="delete_account" action="{{ route('user.delete') }}">
            @csrf
            <!-- Button trigger modal -->
            <div class="submit-block">
                <button type="button" class="button" data-toggle="modal" data-target="#deleteModal">
                    Delete your account
                </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="deleteModalLabel">Are you sure to delete your account permanently ?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="submit" value="delete" class="btn btn-danger">
                            {{ __('Delete account') }}
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </form>
    </div>
</div>
<footer>
    <div class="footer-links">
        <a class="link action" href="{{ route('help') }}">I need help</a>
        <a class="link info" href="{{ route('privacy') }}">Terms of use</a>
        <span>Copyright Mohea © 2020</span>
    </div>
</footer>
@endsection
