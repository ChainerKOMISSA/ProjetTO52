<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller 
{
    public function acceuil(){
        return view('interface.acceuil');
    }

    public function index()
    {
        return view('interface.dashboard');
    }

    
}
