<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NewsletterController extends Controller
{
    public function index(){
        $response = Http::get('http://localhost:5000/admin');
        $admins = json_decode($response->body(), true);

        return view('interface.createnewsletter', ['admins' => $admins['admins']]);
    }

    public function show(){
        $response = Http::get('http://localhost:5000/newsletter');
        $newsletters = json_decode($response->body(), true);

        return view('interface.newsletter', ['newsletters' => $newsletters['newsletters']]);
    }

    public function create(REQUEST $request){
        $response = Http::post('http://localhost:5000/addnewsletter', [
            'libelleNewsletter' => $request->libelleNewsletter,
            'contenuNewsletter' => $request->contenuNewsletter,
            'idAdmin' => $request->idAdmin
        ]);

        return back()->with('success', 'Newsletter créée avec succès');
        
    }

}
