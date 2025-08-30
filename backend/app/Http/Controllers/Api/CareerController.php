<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CareerController extends Controller
{
    /**
     * Display a listing of careers
     */
    public function index(Request $request): JsonResponse
    {
        $query = Career::query();
        
        // Filter by department if provided
        if ($request->has('department')) {
            $query->where('department', $request->department);
        }
        
        // Filter by location if provided
        if ($request->has('location')) {
            $query->where('location', 'like', "%{$request->location}%");
        }
        
        // Filter by type if provided
        if ($request->has('type')) {
            $query->where('type', $request->type);
        }
        
        // Filter by active status
        if ($request->has('active')) {
            $query->where('is_active', $request->active);
        }
        
        // Search by title or description
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('requirements', 'like', "%{$search}%");
            });
        }
        
        // Pagination
        $perPage = $request->get('per_page', 10);
        $careers = $query->orderBy('created_at', 'desc')->paginate($perPage);
        
        return response()->json([
            'success' => true,
            'data' => $careers->items(),
            'pagination' => [
                'current_page' => $careers->currentPage(),
                'last_page' => $careers->lastPage(),
                'per_page' => $careers->perPage(),
                'total' => $careers->total(),
            ]
        ]);
    }

    /**
     * Display the specified career
     */
    public function show(Career $career): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $career
        ]);
    }

    /**
     * Display open career positions
     */
    public function open(): JsonResponse
    {
        $openCareers = Career::where('is_active', true)
            ->orderBy('created_at', 'desc')
            ->get();
        
        return response()->json([
            'success' => true,
            'data' => $openCareers
        ]);
    }
}
