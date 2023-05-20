<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller 
{
    public function acceuil(REQUEST $request){
        $response = Http::get('http://localhost:5000/readevents');
        $events = json_decode($response->body(), true);

        return view('interface.acceuil', ['events' => $events['events']]);
    }

    public function detailsfimu(){
        return view('interface.detailsfimu');
    }


    public function index()
    {
        return view('interface.dashboard');
    }

    
}
