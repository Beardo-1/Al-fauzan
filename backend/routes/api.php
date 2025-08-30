<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SimpleContactController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\PropertyController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\CareerController;
use App\Http\Controllers\Api\PartnerController;
use App\Http\Controllers\Api\OfficeController;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\WebsiteContentController;
use App\Http\Controllers\Api\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Website Content API Routes
Route::prefix('v1')->group(function () {
    Route::get('/website-content', [WebsiteContentController::class, 'index']);
    Route::get('/website-content/{section}', [WebsiteContentController::class, 'getBySection']);
    Route::post('/website-content', [WebsiteContentController::class, 'store']);
    Route::put('/website-content/{content}', [WebsiteContentController::class, 'update']);
    Route::delete('/website-content/{content}', [WebsiteContentController::class, 'destroy']);
    Route::post('/website-content/upload-image', [WebsiteContentController::class, 'uploadImage']);
    Route::patch('/website-content/{content}/toggle', [WebsiteContentController::class, 'toggleActive']);
});

// Public API routes for React frontend
Route::prefix('v1')->group(function () {
    // Projects
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{project}', [ProjectController::class, 'show']);
    Route::get('/projects/featured', [ProjectController::class, 'featured']);
    Route::get('/projects/categories', [ProjectController::class, 'categories']);
    Route::get('/projects/statuses', [ProjectController::class, 'statuses']);
    
    // Properties
    Route::get('/properties', [PropertyController::class, 'index']);
    Route::get('/properties/{property}', [PropertyController::class, 'show']);
    Route::get('/properties/search', [PropertyController::class, 'search']);
    
    // News
    Route::get('/news', [NewsController::class, 'index']);
    Route::get('/news/{news}', [NewsController::class, 'show']);
    Route::get('/news/featured', [NewsController::class, 'featured']);
    Route::get('/news/categories', [NewsController::class, 'categories']);
    
    // Careers
    Route::get('/careers', [CareerController::class, 'index']);
    Route::get('/careers/{career}', [CareerController::class, 'show']);
    Route::get('/careers/open', [CareerController::class, 'open']);
    
    // Partners
    Route::get('/partners', [PartnerController::class, 'index']);
    
    // Offices
    Route::get('/offices', [OfficeController::class, 'index']);
    
    // Pages
    Route::get('/pages/{slug}', [PageController::class, 'show']);
    
    // Contact forms
    Route::post('/contact', [SimpleContactController::class, 'submit']);
    Route::post('/contact/project-interest', [SimpleContactController::class, 'projectInterest']);
    
    // Stats and general info
    Route::get('/stats', function () {
        return response()->json([
            'projects_count' => \App\Models\Project::count(),
            'properties_count' => \App\Models\Property::count(),
            'news_count' => \App\Models\News::count(),
            'careers_count' => \App\Models\Career::where('is_active', true)->count(),
            'partners_count' => \App\Models\Partner::count(),
            'offices_count' => \App\Models\Office::count(),
        ]);
    });
});
