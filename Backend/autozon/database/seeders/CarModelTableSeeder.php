<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\CarModel;

class CarModelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('carModel')->insert([
            'carModel' => 'Up',
            'carModelYear' => 2016,
            'fuel' => 'petrol',
            'engineNumber' => '1.0L',
            'vinNumber' => 'asdfkjh'
        ]);

        DB::table('carModel')->insert([
            'carModel' => 'CL300',
            'carModelYear' => 2005,
            'fuel' => 'petrol',
            'engineNumber' => '6.0L V8',
            'vinNumber' => 'asdfkjh'
        ]);

        DB::table('carModel')->insert([
            'carModel' => 'GTR',
            'carModelYear' => 2020,
            'fuel' => 'petrol',
            'engineNumber' => '3.6L',
            'vinNumber' => 'asdfkjh'
        ]);

        DB::table('carModel')->insert([
            'carModel' => 'Smart',
            'carModelYear' => 2018,
            'fuel' => 'petrol',
            'engineNumber' => '1.4L',
            'vinNumber' => 'asdfkjh'
        ]);
    }
}
