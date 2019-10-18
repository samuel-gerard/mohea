@extends('base')

@section('title')
    Mohea - Dashboard
@endsection

@section('main-content')
{{--  ICI DASHBOARD  --}}
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h1>Dashboard</h1>
                </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    You are logged in!
                    <p>
                        <a href="{{ route('create') }}">Create</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    @include('components.editUser')
    
</div>
@endsection
