<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Car;

class CarTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('car')->insert([
            'carBrand' => 'VW',
            'carModelId' => 1
        ]);

        DB::table('car')->insert([
            'carBrand' => 'Mercedes',
            'carModelId' => 2
        ]);

        DB::table('car')->insert([
            'carBrand' => 'Nissan',
            'carModelId' => 3
        ]);

        DB::table('car')->insert([
            'carBrand' => 'Smart',
            'carModelId' => 5
        ]);

        DB::table('car')->insert([
            'carBrand' => 'Nissan',
            'carModelId' => 5
        ]);
    }
}
