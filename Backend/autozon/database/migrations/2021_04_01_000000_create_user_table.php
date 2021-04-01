<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('user');
        Schema::create('user', function (Blueprint $table) {
            $table->id();
            $table->string('lastName', 100);
            $table->string('firstName', 100);
            $table->string('companyName', 150);
            $table->string('email')->unique();
            $table->string('password', 255);
            $table->string('phone', 20);
            $table->string('streetAndHouseNumber', 100);
            $table->string('zipCode', 10);
            $table->string('country', 100);
            $table->enum('role', ['dealer', 'customer', 'admin']);
            $table->boolean('verified');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
}
