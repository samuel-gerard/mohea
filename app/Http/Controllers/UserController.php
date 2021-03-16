<?php

namespace App\Http\Controllers;

use Auth;
use Storage;
use App\User;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pages.userInfo');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function updateInfo(\App\Http\Requests\UserInfoRequest $request)
    {
        $user = Auth::user();
        $data = $request->validated($user);
        $user->fill($data);
        $user->save();
        return redirect()->route('user.info')->with('message', 'Informations modified successfully !');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function updatePicture(\App\Http\Requests\UserPictureRequest $request)
    {
        // ajout base
        $user = Auth::user();
        $data = $request->validated($user);
        $user->fill($data);
        $user->save();

        // store the picture
        if(request('avatar')){
            $user->update([
                'avatar' => request('avatar')->store('avatars', 'public')
            ]);
        }

        // return view whit confirmation
        return redirect()->route('user.info')->with('message', 'Profile picture modified successfully !');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function updatePassword(\App\Http\Requests\UserPasswordRequest $request)
    {
        $user = Auth::user();
        $data = $request->validated($user);        
        $passwordHash = Hash::make($data['password']);
        $data['password'] = $passwordHash;
        $user->fill($data);
        $user->save();
        return redirect()->route('user.info')->with('message', 'Password modified successfully !');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        $user = Auth::user();
        $user->delete();
        return redirect()->route('home');
    }
}
