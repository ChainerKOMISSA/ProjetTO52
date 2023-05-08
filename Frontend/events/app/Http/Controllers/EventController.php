<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(){
        return view('interface.addevent');
    }

    public function listeconcert(){
        return view('interface.listeconcert');
    }
    public function create(){

    }

    public function show(){

    }

    public function update(){

    }

    public function delete(){
        
    }
}
