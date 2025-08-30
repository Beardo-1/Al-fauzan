<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PartnerController extends Controller
{
    /**
     * Display a listing of partners
     */
    public function index(Request $request): JsonResponse
    {
        $query = Partner::query();
        
        // Filter by category if provided
        if ($request->has('category')) {
            $query->where('category', $request->category);
        }
        
        // Filter by active status
        if ($request->has('active')) {
            $query->where('is_active', $request->active);
        }
        
        // Search by name or description
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }
        
        $partners = $query->orderBy('name', 'asc')->get();
        
        return response()->json([
            'success' => true,
            'data' => $partners
        ]);
    }
}
