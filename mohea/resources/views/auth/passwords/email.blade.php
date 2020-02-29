@extends('base')

@section('main-content')
<div class="main-container">
    <img class="main-logo" src="/images/logo_medium.png" alt="Logo of Mohea" draggable="false">
    <div class="login">
        <h1>Forgot your password?</h1>
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif
        <form method="POST" action="{{ route('password.email') }}">
            @csrf
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
            <div class="submit-block">
                <button type="submit" class="button primary">
                    {{ __('Send password reset link') }}
                </button>
            </div>
        </form>
    </div>
</div>
@endsection
