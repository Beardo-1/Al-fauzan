<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of projects
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Project::query();
            
            // Filter by category if provided
            if ($request->has('category')) {
                $query->where('category', $request->category);
            }
            
            // Filter by status if provided
            if ($request->has('status')) {
                $query->where('status', $request->status);
            }
            
            // Search by title or description
            if ($request->has('search')) {
                $search = $request->search;
                $query->where(function($q) use ($search) {
                    $q->where('title', 'like', "%{$search}%")
                      ->orWhere('description', 'like', "%{$search}%")
                      ->orWhere('long_description', 'like', "%{$search}%");
                });
            }
            
            // Pagination
            $perPage = $request->get('per_page', 12);
            $projects = $query->orderBy('created_at', 'desc')->paginate($perPage);
            
            return response()->json([
                'success' => true,
                'data' => $projects->items(),
                'pagination' => [
                    'current_page' => $projects->currentPage(),
                    'last_page' => $projects->lastPage(),
                    'per_page' => $projects->perPage(),
                    'total' => $projects->total(),
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch projects',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified project
     */
    public function show(Project $project): JsonResponse
    {
        try {
            // Add image URLs to the response
            $projectData = $project->toArray();
            $projectData['main_image_url'] = $project->main_image_url;
            $projectData['images_urls'] = $project->images_urls;
            
            return response()->json([
                'success' => true,
                'data' => $projectData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch project',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display featured projects
     */
    public function featured(): JsonResponse
    {
        try {
            $featuredProjects = Project::featured()
                ->orderBy('created_at', 'desc')
                ->limit(6)
                ->get();
            
            // Add image URLs to each project
            $featuredProjects->each(function ($project) {
                $project->main_image_url = $project->main_image_url;
                $project->images_urls = $project->images_urls;
            });
            
            return response()->json([
                'success' => true,
                'data' => $featuredProjects
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch featured projects',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get project categories
     */
    public function categories(): JsonResponse
    {
        try {
            $categories = Project::distinct()
                ->pluck('category')
                ->filter()
                ->values();
            
            return response()->json([
                'success' => true,
                'data' => $categories
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch categories',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get project statuses
     */
    public function statuses(): JsonResponse
    {
        try {
            $statuses = Project::distinct()
                ->pluck('status')
                ->filter()
                ->values();
            
            return response()->json([
                'success' => true,
                'data' => $statuses
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch statuses',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
