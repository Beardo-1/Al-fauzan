<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Office;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class OfficeController extends Controller
{
    /**
     * Display a listing of offices
     */
    public function index(Request $request): JsonResponse
    {
        $query = Office::query();
        
        // Filter by country if provided
        if ($request->has('country')) {
            $query->where('country', 'like', "%{$request->country}%");
        }
        
        // Filter by city if provided
        if ($request->has('city')) {
            $query->where('city', 'like', "%{$request->city}%");
        }
        
        // Filter by active status
        if ($request->has('active')) {
            $query->where('is_active', $request->active);
        }
        
        // Search by name or address
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('address', 'like', "%{$search}%")
                  ->orWhere('city', 'like', "%{$search}%")
                  ->orWhere('country', 'like', "%{$search}%");
            });
        }
        
        $offices = $query->orderBy('name', 'asc')->get();
        
        return response()->json([
            'success' => true,
            'data' => $offices
        ]);
    }
}
