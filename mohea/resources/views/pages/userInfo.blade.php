@extends('base')

@section('title')
    Edit Account | Mohea
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

<main class="mb-4">
    <div class="container">
        <div class="row justify-content-center">            
            <div class="col-md-8">
                @if(session()->has('message'))
                    <div class="alert alert-success">
                        {{ session()->get('message') }}
                    </div>
                @endif
                <div class="card">
                    <div class="card-body">
                        <form method="POST" name="edit_user_info" action="{{ route('user.update.info') }}">
                            @csrf
                            <h2>Edit account</h2>
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
                                    class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>
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
                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" value="info" class="btn btn-primary">
                                        {{ __('Edit account') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <form method="POST" name="edit_user_password" action="{{ route('user.update.password') }}">
                            @csrf
                            <h2>Change Password</h2>
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
                                    class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>
                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control"
                                        name="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" value="password" class="btn btn-primary">
                                        {{ __('Change password') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div class="card mt-4">
                    <div class="card-body">
                        <form method="POST" name="edit_user_image" action="{{ route('user.update.picture') }}" enctype="multipart/form-data">
                        @csrf    
                        <label for="user_picture">Change your profile picture</label>

                            <div class="mb-3 custom-file">
                                <input required type="file" class="custom-file-input form-control-file @error('avatar') is-invalid @enderror" id="validatedCustomFile" name ="avatar" >
                                <label class="custom-file-label" for="validatedCustomFile">Upload your profile picture</label>
                                @error('avatar')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            @if ( file_exists(public_path(asset('storage/' . Auth::user()->avatar))) )
                                <img class="img-thumbnail" id="your-image" src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->name }}'s profile picture" width="200px">
                            @elseif ( Auth::user()->avatar !== null )
                                <img class="img-thumbnail" id="your-image" src="{{ asset('storage/' . Auth::user()->avatar) }}" alt="{{ Auth::user()->name }}'s profile picture" width="200px">                            
                            @endif

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" value="avatar" class="btn btn-primary">
                                        {{ __('Save picture') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="card mt-4">
                    <div class="card-body">
                        <form method="POST" name="delete_account" action="{{ route('user.delete') }}">
                            @csrf
                            <div class="form-group row mb-0">
                                <div class="col">
                                    <h3>Permanently delete account</h3>
                                </div>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-danger mr-4" data-toggle="modal" data-target="#deleteModal">
                                    Delete account
                                </button>
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
                            </div>
                        </form>
                    </div>
                </div>
                
                

            </div>
        </div>
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
