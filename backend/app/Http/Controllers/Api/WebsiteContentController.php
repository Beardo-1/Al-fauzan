<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WebsiteContent;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class WebsiteContentController extends Controller
{
    public function index(): JsonResponse
    {
        $contents = WebsiteContent::active()->ordered()->get();
        
        $grouped = $contents->groupBy('section');
        
        return response()->json([
            'success' => true,
            'data' => $grouped
        ]);
    }

    public function getBySection(string $section): JsonResponse
    {
        $contents = WebsiteContent::active()->bySection($section)->ordered()->get();
        
        return response()->json([
            'success' => true,
            'data' => $contents
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'section' => 'required|string|max:255',
            'key' => 'required|string|max:255',
            'value_en' => 'required|string',
            'value_ar' => 'required|string',
            'type' => 'required|in:text,image,video,boolean,json',
            'order' => 'integer|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $content = WebsiteContent::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $content
        ], 201);
    }

    public function update(Request $request, WebsiteContent $content): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'value_en' => 'sometimes|required|string',
            'value_ar' => 'sometimes|required|string',
            'type' => 'sometimes|in:text,image,video,boolean,json',
            'is_active' => 'sometimes|boolean',
            'order' => 'sometimes|integer|min:0'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $content->update($request->all());

        return response()->json([
            'success' => true,
            'data' => $content
        ]);
    }

    public function destroy(WebsiteContent $content): JsonResponse
    {
        $content->delete();

        return response()->json([
            'success' => true,
            'message' => 'Content deleted successfully'
        ]);
    }

    public function uploadImage(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $file = $request->file('image');
        $path = $file->store('public/website-content');
        $url = Storage::url($path);

        return response()->json([
            'success' => true,
            'url' => $url,
            'path' => $path
        ]);
    }

    public function toggleActive(WebsiteContent $content): JsonResponse
    {
        $content->update(['is_active' => !$content->is_active]);

        return response()->json([
            'success' => true,
            'data' => $content
        ]);
    }
}
