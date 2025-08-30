<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
        'title',
        'type',
        'location',
        'price',
        'description',
        'area',
        'status',
        'image',
        'featured'
    ];

    protected $casts = [
        'featured' => 'boolean',
    ];
}
