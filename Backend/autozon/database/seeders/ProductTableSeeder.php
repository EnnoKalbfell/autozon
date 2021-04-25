<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Product;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product')->insert([
            'name' => 'Spoiler',
            'dealer' => 2,
            'manufacturer' => 'APR',
            'price' => '1520.20',
            'streetLegality' => true,
            'carId' => 1,
            'shortDescription' => 'Dies ist ein Spoiler',
            'category' => 'Spoiler',
            'serialNumber' => '155443345534',
            'preview' => 'prev1',
            'preview2' => 'prev2',
            'preview3' => 'prev3'
        ]);

        DB::table('product')->insert([
            'name' => 'Ölfilter',
            'dealer' => 3,
            'manufacturer' => 'K und N',
            'price' => '15.45',
            'streetLegality' => true,
            'carId' => 2,
            'shortDescription' => 'Dies ist ein Ölfilter',
            'category' => 'Filter',
            'serialNumber' => '155443345534',
            'preview' => 'prev1',
            'preview2' => 'prev2',
            'preview3' => 'prev3'
        ]);

        DB::table('product')->insert([
            'name' => 'Downpipe',
            'dealer' => 2,
            'manufacturer' => 'Akrapovic',
            'price' => '8053.00',
            'streetLegality' => false,
            'carId' => 3,
            'shortDescription' => 'Downpipe / Link pipe set (SS) for stock turbochargers
            DP/L-NI/SS/1',
            'category' => 'Exhaust',
            'serialNumber' => '155443345534',
            'preview' => 'prev1',
            'preview2' => 'prev2',
            'preview3' => 'prev3'
        ]);

        DB::table('product')->insert([
            'name' => 'Reifen',
            'dealer' => 2,
            'manufacturer' => 'Michelin',
            'price' => '59.95',
            'streetLegality' => true,
            'carId' => 4,
            'shortDescription' => 'Dies sind Reifen für einen Smart for Two',
            'category' => 'Reifen',
            'serialNumber' => '155443345534',
            'preview' => 'prev1',
            'preview2' => 'prev2',
            'preview3' => 'prev3'
        ]);
    }
}
