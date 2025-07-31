<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DeputyController extends Controller
{
    function index(Request $request)
    {
        $response = Http::get("https://dadosabertos.camara.leg.br/api/v2/deputados");

        $deputies = $response['dados'];

        return response()->json(['ok' => true, 'data' => $deputies]);
    }
}
