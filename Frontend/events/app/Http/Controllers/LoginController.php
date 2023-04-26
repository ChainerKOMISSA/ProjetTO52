<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class LoginController extends Controller
{

    public function index() {
        return view('auth.login');
    }

    public function login(REQUEST $request){
    
       //dd($request->all());
       $email = $request->input('email');
       $password = $request->input('password');

       $response = Http::post('http://127.0.0.1:5000/login', [
            'email' => $email,
            'password' => $password
       ]);

       if ($response->ok()) {
        // Authentication successful
        $access_token = $response->json()['access_token'];
        // Save the access token to the session or wherever you prefer
        return redirect('/dashboard');
        } else {
        // Authentication failed
        return redirect('/login')->withErrors(['Invalid credentials']);
        }
    }

}
