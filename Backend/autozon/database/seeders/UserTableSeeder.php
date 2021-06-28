<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user')->insert([
            'lastName' => 'Admin',
            'firstName' => 'Test',
            'companyName' => '',
            'email' => 'admin@test.ch',
            'password' => Hash::make('sml12345'),
            'phone' => '0791234567',
            'streetAndHouseNumber' => 'Teststrasse 1',
            'zipCode' => '3000',
            'city' => 'Bern',
            'country' => 'Switzerland',
            'role' => 'admin',
            'verified' => true
        ]);
        
        DB::table('user')->insert([
            'lastName' => 'RIDEX',
            'firstName' => 'Test',
            'companyName' => 'RIDEX',
            'email' => 'ridex@test.ch', // verifieddealer@test.ch
            'password' => Hash::make('sml12345'),
            'phone' => '0798765432',
            'streetAndHouseNumber' => 'Teststrasse 2',
            'zipCode' => '3000',
            'city' => 'Bern',
            'country' => 'Switzerland',
            'role' => 'dealer',
            'verified' => true
        ]);

        DB::table('user')->insert([
            'lastName' => 'BOSCH',
            'firstName' => 'Test',
            'companyName' => 'BOSCH',
            'email' => 'bosch@test.ch', // unverifieddealer@test.ch
            'password' => Hash::make('sml12345'),
            'phone' => '0762229900',
            'streetAndHouseNumber' => 'Teststrasse 3',
            'zipCode' => '3000',
            'city' => 'Bern',
            'country' => 'Switzerland',
            'role' => 'dealer',
            'verified' => false
        ]);

        DB::table('user')->insert([
            'lastName' => 'User',
            'firstName' => 'Test',
            'companyName' => '',
            'email' => 'user@test.ch',
            'password' => Hash::make('sml12345'),
            'phone' => '0783331122',
            'streetAndHouseNumber' => 'Teststrasse 4',
            'zipCode' => '3000',
            'city' => 'Bern',
            'country' => 'Switzerland',
            'role' => 'customer',
            'verified' => true
        ]);
    }
}
