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
        $deputies = Deputie::get();

        if (count($deputies) < 5)
        {
            SyncDeputiesJob::dispatch();
            SyncExpensesJob::dispatch();
        }

        return response()->json($deputies);
    }

}
