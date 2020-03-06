@extends('base')

@section('main-content')
<div class="main-container">
    <a href="/"><img class="main-logo" src="/images/logo_medium.png" alt="Logo of Mohea" draggable="false"></a>
    <div class="login">
        <h1>Sign in</h1>
        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="social">
                <a href="{{ url('/login/google') }}" class="btn btn-google"><i class="fa fa-google"></i>Google</a>
                <a href="{{ url('/login/facebook') }}" class="btn btn-facebook"><i class="fa fa-facebook"></i>Facebook</a>
                <a href="{{ url('/login/github') }}" class="btn btn-github"><i class="fa fa-github"></i>Github</a>
            </div>
            <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-mail address') }}</label>
                <div class="col-md-6">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
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
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                    <label class="form-check-label" for="remember">
                        {{ __('Never forget me, please') }}
                    </label>
                </div>
            </div>
            <div class="submit-block">
                <button type="submit" class="button primary">
                    {{ __('Log in') }}
                </button>
                @if (Route::has('password.request'))
                    <div class="forgot">
                        <a class="link secondary" href="{{ route('password.request') }}">
                            {{ __('Forgot your password?') }}
                        </a>
                    </div>
                @endif
            </div>
        </form>
    </div>
    <a href="{{ route('register') }}" class="link">I don't have an account yet</a>
</div>
@endsection
