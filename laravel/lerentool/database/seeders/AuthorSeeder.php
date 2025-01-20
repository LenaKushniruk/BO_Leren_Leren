<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create(['author'=>'Aristoteles']);
        Author::create(['author'=>'Socrates']);
        Author::create(['author'=>'Albert Einstein']);
    }
}
