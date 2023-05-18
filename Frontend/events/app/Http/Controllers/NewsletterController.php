<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NewsletterController extends Controller
{
    public function index(){
        return view('interface.createnewsletter');
    }

    public function show(){
        $response = Http::get('http://localhost:5000/newsletter');
        $newsletters = json_decode($response->body(), true);
        //dd($newsletters);

        return view('interface.newsletter', ['newsletters' => $newsletters['newsletters']]);
    }

}
