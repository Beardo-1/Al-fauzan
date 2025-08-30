<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\PropertyController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\WebsiteContentController;

Route::get('/', function () {
    return view('welcome');
});

// Admin routes
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    
    // Website Content Management
    Route::get('/website-content', [WebsiteContentController::class, 'index'])->name('website-content.index');
    Route::get('/website-content/page/{page}', [WebsiteContentController::class, 'page'])->name('website-content.page');
    Route::get('/website-content/{id}/edit', [WebsiteContentController::class, 'edit'])->name('website-content.edit');
    Route::put('/website-content/{id}', [WebsiteContentController::class, 'update'])->name('website-content.update');
    Route::patch('/website-content/{id}/toggle', [WebsiteContentController::class, 'toggleActive'])->name('website-content.toggle');
    Route::post('/website-content/upload-image', [WebsiteContentController::class, 'uploadImage'])->name('website-content.upload-image');
    
    // Existing routes
    Route::resource('projects', ProjectController::class);
    Route::post('projects/upload-image', [ProjectController::class, 'uploadImage'])->name('projects.upload-image');
    Route::resource('properties', PropertyController::class);
    Route::post('properties/upload-image', [PropertyController::class, 'uploadImage'])->name('properties.upload-image');
    Route::resource('news', NewsController::class);
    Route::post('news/upload-image', [NewsController::class, 'uploadImage'])->name('news.upload-image');
});
