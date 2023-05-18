<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;


class LoginController extends Controller
{

    public function index() {
        return view('auth.login');
    }

    /*public function login(REQUEST $request){

    
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
    }*/

    public function register(REQUEST $request){
        $client = new Client(['base_uri' => 'http://localhost:5000/']);
        $response = $client->post('register', [
            'json' => [
                'username' => $request->username,
                'email' => $request->email,
                'password' => $request->password
            ]
        ]);
        $data = json_decode($response->getBody(), true);
        return redirect('/login');
    }

    public function login(REQUEST $request){
        $client = new Client(['base_uri' => 'http://localhost:5000/']);
        $response = $client->post('login', [
            'json' => [
                'username' => $request->username,
                'password' => $request->password
            ]
        ]);
        $data = json_decode($response->getBody(), true);
        return redirect('/dashboard');
    }

}
