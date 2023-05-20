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
