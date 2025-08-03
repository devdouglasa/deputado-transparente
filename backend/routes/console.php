<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use App\Jobs\SyncDeputiesJob;
use App\Jobs\SyncExpensesJob;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


Schedule::job(new SyncDeputiesJob(), connection: 'database')->daily();
Schedule::job(new SyncExpensesJob(), connection: 'database')->daily();
