<?php

namespace App\Http\Controllers;

use App\Jobs\SyncDeputiesJob;
use App\Jobs\SyncExpensesJob;
use App\Models\Deputie;
use Illuminate\Http\Request;

class DeputyController extends Controller
{
    function index(Request $request)
    {
        // SyncDeputiesJob::dispatch();
        // SyncExpensesJob::dispatch();

        $deputies = Deputie::get();

        return response()->json($deputies);
    }

}
