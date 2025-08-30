<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('website_contents', function (Blueprint $table) {
            $table->id();
            $table->string('section'); // hero, about, projects, etc.
            $table->string('key'); // title, subtitle, image, etc.
            $table->text('value_en'); // English content
            $table->text('value_ar'); // Arabic content
            $table->string('type')->default('text'); // text, image, boolean, json
            $table->boolean('is_active')->default(true);
            $table->integer('order')->default(0);
            $table->timestamps();
            
            $table->unique(['section', 'key']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('website_contents');
    }
};
