<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('category');
            $table->string('location');
            $table->string('year')->nullable();
            $table->string('value')->nullable();
            $table->string('image')->nullable(); // Main image
            $table->json('images')->nullable(); // Array of project images
            $table->text('description')->nullable();
            $table->text('long_description')->nullable();
            $table->string('area')->nullable();
            $table->string('status')->default('Planned');
            $table->boolean('featured')->default(false);
            
            // Enhanced fields for project details
            $table->json('features')->nullable(); // Array of key features
            $table->json('specifications')->nullable(); // JSON object for specs
            $table->json('timeline')->nullable(); // Array of timeline items
            $table->json('investment_opportunities')->nullable(); // Array of opportunities
            $table->string('video_url')->nullable(); // Video URL
            
            // SEO and meta fields
            $table->string('slug')->unique()->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
