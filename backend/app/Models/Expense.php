<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $table = "expenses";

    protected $fillable = [
        'deputado_id',
        'ano',
        'mes',
        'tipo_despesa',
        'valor_documento',
        'fornecedor',
        'data_documento',
        'num_documento'
    ];
    protected $casts = [
        'data_documento' => 'date',
    ];

    public function deputies()
    {
        return $this->belongsTo(Deputie::class);
    }
}
