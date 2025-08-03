<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Expense;
use App\Models\Deputie;

class ExpenseController extends Controller
{
    function show(int $id)
    {
        $deputy = Deputie::findOrFail($id);

        $expenses = Expense::query()->where("deputado_id", $deputy->id)->get();

        $totalExpenses = $expenses->sum('valor_documento');

        return response()->json(['deputado' => $deputy, 'despesas' => $expenses, 'totalGasto' => $totalExpenses]);
    }
}
