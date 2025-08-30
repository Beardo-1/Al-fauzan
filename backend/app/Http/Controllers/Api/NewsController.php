<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class NewsController extends Controller
{
    /**
     * Display a listing of news articles
     */
    public function index(Request $request): JsonResponse
    {
        $query = News::query();
        
        // Filter by category if provided
        if ($request->has('category')) {
            $query->where('category', $request->category);
        }
        
        // Filter by featured status
        if ($request->has('featured')) {
            $query->where('is_featured', $request->featured);
        }
        
        // Search by title or content
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('content', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%");
            });
        }
        
        // Pagination
        $perPage = $request->get('per_page', 10);
        $news = $query->orderBy('published_at', 'desc')->paginate($perPage);
        
        return response()->json([
            'success' => true,
            'data' => $news->items(),
            'pagination' => [
                'current_page' => $news->currentPage(),
                'last_page' => $news->lastPage(),
                'per_page' => $news->perPage(),
                'total' => $news->total(),
            ]
        ]);
    }

    /**
     * Display the specified news article
     */
    public function show(News $news): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $news
        ]);
    }

    /**
     * Display featured news articles
     */
    public function featured(): JsonResponse
    {
        $featuredNews = News::where('is_featured', true)
            ->orderBy('published_at', 'desc')
            ->limit(5)
            ->get();
        
        return response()->json([
            'success' => true,
            'data' => $featuredNews
        ]);
    }

    /**
     * Get available news categories
     */
    public function categories(): JsonResponse
    {
        $categories = News::select('category')
            ->distinct()
            ->whereNotNull('category')
            ->where('category', '!=', '')
            ->pluck('category');
        
        return response()->json([
            'success' => true,
            'data' => $categories
        ]);
    }
}
