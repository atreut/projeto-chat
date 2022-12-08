@extends('layouts.auth_layout')
@section('title')
    {{ __('messages.login') }}
@endsection
@section('meta_content')
    - {{ __('messages.login') }} {{ __('messages.to') }} {{getAppName()}}
@endsection
@section('css')
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card-group">
                <div class="card p-4">
                    <div class="card-body">
                        @if(Session::has('error'))
                            <div class="alert alert-danger">{{Session::get('error')}}</div>
                        @endif
                        @if(Session::has('success'))
                            <div class="alert alert-success">{{Session::get('success')}}</div>
                        @endif
                        <form method="post" action="{{ url('/login') }}" id="loginForm">
                            {{ csrf_field() }}
                            <h1>{{ __('messages.login') }}</h1>
                            <p class="text-muted">{{ __('messages.sign_in_to_your_account') }}</p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                      <i class="fa fa-envelope"></i>
                                    </span>
                                    </div>
                                    <input type="email" class="form-control {{ $errors->has('email')?'is-invalid':'' }}"
                                           name="email" value="{{ old('email') }}"
                                           placeholder="{{ __('messages.email') }}"
                                           id="email">
                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text">
                                      <i class="fa fa-lock lock-icon-size"></i>
                                    </span>
                                    </div>
                                    <input type="password"
                                           class="form-control {{ $errors->has('password')?'is-invalid':'' }}"
                                           placeholder="{{ __('messages.password') }}" name="password" id="password"
                                           onkeypress="return avoidSpace(event)">
                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback">
                                       <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                                <div class="input-group mb-3">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> {{ __('messages.remember_me') }}
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-primary px-4" type="button"
                                                id="loginBtn">{{ __('messages.login') }}</button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <a class="btn btn-link px-0" href="{{ url('/password/reset') }}">
                                            {{ __('messages.forgot_password?') }}
                                        </a>
                                    </div>
                                </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
