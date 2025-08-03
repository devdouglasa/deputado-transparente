<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Http;
use App\Models\Deputie;

class SyncDeputiesJob implements ShouldQueue
{
    use Queueable, Dispatchable, InteractsWithQueue, SerializesModels;

    public $timeout = 2400;
    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $deputies = Http::get("https://dadosabertos.camara.leg.br/api/v2/deputados")['dados'];

        foreach ($deputies as $dep)
        {
            $depInfoDetail = Http::get('https://dadosabertos.camara.leg.br/api/v2/deputados/' . $dep['id'])['dados'];

            Deputie::updateOrCreate(
                ['id' => $dep['id']],
                [
                    'nome' => $dep['nome'],
                    'sigla_uf' => $dep['siglaUf'],
                    'sigla_partido' => $dep['siglaPartido'],
                    'url_foto' => $dep['urlFoto'],
                    'nome_civil' => $depInfoDetail['nomeCivil'],
                    'sexo' => $depInfoDetail['sexo'],
                    'data_nascimento' => $depInfoDetail['dataNascimento'],
                ]
            );
        }
    }
}
