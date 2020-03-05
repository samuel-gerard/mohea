@extends('base')

@section('main-content')
<div class="main-container">
    <a href="/"><img class="main-logo" src="/images/logo_medium.png" alt="Logo of Mohea" draggable="false"></a>
    <div class="register">
        <h1>Register and start creating cool stuff</h1>
        <form method="POST" action="{{ route('register') }}">
            <div class="social">
                <a href="{{ url('/login/google') }}" class="btn btn-google"><i class="fa fa-google"></i>Google</a>
                <a href="{{ url('/login/facebook') }}" class="btn btn-facebook"><i class="fa fa-facebook"></i>Facebook</a>
                <a href="{{ url('/login/github') }}" class="btn btn-github"><i class="fa fa-github"></i>Github</a>
            </div>
            @csrf
            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>
                <div class="col-md-6">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-mail address') }}</label>
                <div class="col-md-6">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>
                <div class="col-md-6">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Password (again, to prevent typing error)') }}</label>
                <div class="col-md-6">
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                </div>
            </div>
            <div class="form-group row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="privacy" id="privacy">
                    <label class="form-check-label" for="privacy">
                        Have you read and agree to the <a class="link secondary" href="/privacy">privacy policy</a>?
                    </label>
                </div>
            </div>
            <div class="submit-block">
                <button type="submit" class="button primary">
                    {{ __('Create an account') }}
                </button>
            </div>
        </form>
    </div>
    <a href="{{ route('login') }}" class="link">I already have an account</a>
</div>
@endsection
