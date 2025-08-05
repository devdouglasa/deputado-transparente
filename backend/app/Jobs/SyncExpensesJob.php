<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Http;
use App\Models\Deputie;
use App\Models\Expense;

class SyncExpensesJob implements ShouldQueue
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
        $deputies = Deputie::get();

        foreach ($deputies as $deputie) {
            $expenses = Http::get("https://dadosabertos.camara.leg.br/api/v2/deputados/" . $deputie['id'] . "/despesas")['dados'];

            foreach ($expenses as $expense) {
                Expense::updateOrCreate(
                    ['deputado_id' => $deputie['id'], 'data_documento' => $expense['dataDocumento'], 'tipo_despesa' => $expense['tipoDespesa']],
                    [
                        'deputado_id' => $deputie['id'],
                        'ano' => $expense['ano'],
                        'mes' => $expense['mes'],
                        'tipo_despesa' => $expense['tipoDespesa'],
                        'fornecedor' => $expense['nomeFornecedor'],
                        'valor_documento' => $expense['valorDocumento'],
                        'data_documento' => $expense['dataDocumento'],
                        'num_documento' => $expense['numDocumento'],
                    ]
                );
            }

        }
    }
}
