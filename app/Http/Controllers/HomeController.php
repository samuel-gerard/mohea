<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(\App\User $user)
    {
        if(\Auth::check()){
            return redirect()->route('dashboard');
        }
        return view('home');
    }

    public function dashboard()
    {
        return view('dashboard');
    }

    public function privacy()
    {
        return view('pages.privacy');
    }

    public function help()
    {
        return view('pages.help');
    }
}
