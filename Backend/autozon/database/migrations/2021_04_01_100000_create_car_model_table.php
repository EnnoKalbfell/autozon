<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarModelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('carModel');
        Schema::create('carModel', function (Blueprint $table) {
            $table->id();
            $table->string('carModel', 100);
            $table->integer('carModelYear');
            $table->string('fuel', 100);
            $table->string('engineNumber', 100);
            $table->string('vinNumber', 100);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carModel');
    }
}
