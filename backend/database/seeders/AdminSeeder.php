<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            'name' => 'Admin User',
            'email' => 'it@alfauzan.com',
            'password' => Hash::make('password123'),
            'email_verified_at' => now(),
        ]);
    }
}





