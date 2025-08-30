<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'title',
        'category',
        'content',
        'image',
        'featured',
        'is_active'
    ];

    protected $casts = [
        'featured' => 'boolean',
        'is_active' => 'boolean',
    ];
}
