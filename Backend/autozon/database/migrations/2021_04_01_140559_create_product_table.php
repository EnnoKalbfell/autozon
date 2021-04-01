<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('product');
        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->foreignId('dealer')->constrained('user');
            $table->string('manufacturer', 150);
            $table->decimal('price', 11, 2);
            $table->boolean('streetLegality');
            $table->foreignId('carId')->constrained('car');
            $table->string('shortDescription', 200);
            $table->bigInteger('category'); // TODO: Was ist das?
            $table->string('serialNumber', 100);
            $table->string('preview', 150);
            $table->string('preview2', 150);
            $table->string('preview3', 150);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
}
