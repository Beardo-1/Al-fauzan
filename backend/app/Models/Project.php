<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'category',
        'location',
        'year',
        'value',
        'image',
        'images',
        'description',
        'long_description',
        'area',
        'status',
        'featured',
        'features',
        'specifications',
        'timeline',
        'investment_opportunities',
        'video_url',
        'slug',
        'meta_description',
        'meta_keywords'
    ];

    protected $casts = [
        'featured' => 'boolean',
        'images' => 'array',
        'features' => 'array',
        'specifications' => 'array',
        'timeline' => 'array',
        'investment_opportunities' => 'array',
    ];

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * Scope a query to only include featured projects.
     */
    public function scopeFeatured($query)
    {
        return $query->where('featured', true);
    }

    /**
     * Scope a query to only include projects by status.
     */
    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    /**
     * Scope a query to only include projects by category.
     */
    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
    }

    /**
     * Get the main image URL
     */
    public function getMainImageUrlAttribute()
    {
        return $this->image ? asset('storage/' . $this->image) : null;
    }

    /**
     * Get all images URLs
     */
    public function getImagesUrlsAttribute()
    {
        if (!$this->images) return [];
        
        return collect($this->images)->map(function ($image) {
            return asset('storage/' . $image);
        })->toArray();
    }
}
