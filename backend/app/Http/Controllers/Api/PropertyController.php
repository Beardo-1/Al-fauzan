<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PropertyController extends Controller
{
    /**
     * Display a listing of properties
     */
    public function index(Request $request): JsonResponse
    {
        $query = Property::query();
        
        // Filter by type if provided
        if ($request->has('type')) {
            $query->where('type', $request->type);
        }
        
        // Filter by status if provided
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }
        
        // Filter by price range
        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }
        
        if ($request->has('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }
        
        // Filter by location
        if ($request->has('location')) {
            $query->where('location', 'like', "%{$request->location}%");
        }
        
        // Search by title or description
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('location', 'like', "%{$search}%");
            });
        }
        
        // Pagination
        $perPage = $request->get('per_page', 12);
        $properties = $query->orderBy('created_at', 'desc')->paginate($perPage);
        
        return response()->json([
            'success' => true,
            'data' => $properties->items(),
            'pagination' => [
                'current_page' => $properties->currentPage(),
                'last_page' => $properties->lastPage(),
                'per_page' => $properties->perPage(),
                'total' => $properties->total(),
            ]
        ]);
    }

    /**
     * Display the specified property
     */
    public function show(Property $property): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $property
        ]);
    }

    /**
     * Search properties
     */
    public function search(Request $request): JsonResponse
    {
        $query = Property::query();
        
        // Search by multiple criteria
        if ($request->has('q')) {
            $search = $request->q;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('location', 'like', "%{$search}%")
                  ->orWhere('features', 'like', "%{$search}%");
            });
        }
        
        // Additional filters
        if ($request->has('type')) {
            $query->where('type', $request->type);
        }
        
        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }
        
        if ($request->has('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }
        
        $properties = $query->orderBy('created_at', 'desc')->limit(20)->get();
        
        return response()->json([
            'success' => true,
            'data' => $properties
        ]);
    }
}
