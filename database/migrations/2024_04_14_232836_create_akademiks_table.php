<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('akademiks', function (Blueprint $table) {
            $table->id();
            $table->integer('totalsks');
            $table->boolean('metodologi');
            $table->boolean('kkn');
            $table->float('ipk');
            $table->float('s1');
            $table->float('s2');
            $table->float('s3');
            $table->float('s4');
            $table->float('s5');
            $table->float('s6');
            $table->float('s7');
            $table->float('s8');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('akademiks');
    }
};
