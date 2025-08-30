<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PageController extends Controller
{
    /**
     * Display the specified page by slug
     */
    public function show(string $slug): JsonResponse
    {
        $page = Page::where('slug', $slug)->first();
        
        if (!$page) {
            return response()->json([
                'success' => false,
                'message' => 'Page not found'
            ], 404);
        }
        
        return response()->json([
            'success' => true,
            'data' => $page
        ]);
    }
}
