<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Deputie extends Model
{
    protected $table = "deputies";
    protected $fillable = [
        'id',
        'nome',
        'nome_civil',
        'sigla_uf',
        'sigla_partido',
        'url_foto',
        'sexo',
        'data_nascimento',
    ];
    public $incrementing = false;
    protected $keyType = 'int';
}
