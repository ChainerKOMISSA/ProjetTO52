<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class EventController extends Controller
{
    public function index(){
        $response = Http::get('http://localhost:5000/type');
        $types = json_decode($response->body(), true);

        return view('interface.addevent', ['types' => $types['types']]);
    }

    public function listeconcert(){
        $response = Http::get('http://localhost:5000/concert');
        $concerts = json_decode($response->body(), true);

        return view('interface.listeconcert', ['concerts' => $concerts['concerts']]);
    }

    public function listefestival(){
        $response = Http::get('http://localhost:5000/festival');
        $festivals = json_decode($response->body(), true);

        return view('interface.listefestival', ['festivals' => $festivals['festivals']]);
    }

    public function create(REQUEST $request){
        $response = Http::post('http://localhost:5000/createvent', [
            'nomEvenement' => $request->nomEvenement,
            'descriptionEvenement' => $request->descriptionEvenement,
            'idType' => $request->idType,
            'dateDebut' => $request->dateDebut,
            'dateFin' => $request->dateFin,
            'heureDebut' => $request->heureDebut,
            'heureFin' => $request->heureFin,
            'lieuEvenement' => $request->lieuEvenement,
            'programme' => $request->programme 
        ]);

        return back()->with('success', 'Evènement créé avec succès');
    }


    public function update(Request $request, $idEvenement){
        $response = Http::put('http://localhost:5000/updatevent'.$idEvenement, [
            'nomEvenement' => $request->nomEvenement,
            'descriptionEvenement' => $request->descriptionEvenement,
            'idType' => $request->idType,
            'dateDebut' => $request->dateDebut,
            'dateFin' => $request->dateFin,
            'heureDebut' => $request->heureDebut,
            'heureFin' => $request->heureFin,
            'lieuEvenement' => $request->lieuEvenement,
            'programme' => $request->programme 
        ]);

        return back()->with('success', 'Evènement modifié avec succès'); 
    }

    public function delete($idEvenement){
        $response = Http::delete('http://localhost:5000/deletevent'.$idEvenement);
        return back()->with('successDelete', 'Evènement supprimé avec succès'); 
        
    }
}
