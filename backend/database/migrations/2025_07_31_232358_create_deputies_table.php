<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('deputies', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('nome_civil')->nullable();
            $table->string('sigla_uf', 2);
            $table->string('sigla_partido', 10)->nullable();
            $table->string('url_foto')->nullable();
            $table->string('sexo')->nullable();
            $table->string('data_nascimento')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deputies');
    }
};
