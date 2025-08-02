<?php

namespace App\Http\Controllers;

use App\Jobs\SyncDeputiesExpensesJob;
use App\Models\Deputie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DeputyController extends Controller
{
    function index(Request $request)
    {
        // SyncDeputiesExpensesJob::dispatch();

        $deputies = Deputie::get();

        return response()->json($deputies);
    }

    function show($id)
    {
        $deputyDetail = Http::get("https://dadosabertos.camara.leg.br/api/v2/deputados/" . $id);

        return response()->json(["ok"=> true, "data" => $deputyDetail]);
    }
}
