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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('image')->nullable();
            $table->rememberToken()->nullable();;
            $table->timestamps();
            $table->string('telp')->unique()->nullable();
            $table->string('nim')->unique()->nullable();
            $table->string('dospem')->nullable();
            $table->string('alamat')->nullable();
            $table->string('tempatlahir')->nullable();
            $table->string('tanggallahir')->nullable();
            $table->string('jeniskelamin')->nullable();
            $table->string('kewarganegaraan')->nullable();
            $table->string('agama')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
