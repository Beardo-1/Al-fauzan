<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WebsiteContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class WebsiteContentController extends Controller
{
    public function index()
    {
        $contents = WebsiteContent::active()->ordered()->get();
        $grouped = $contents->groupBy('section');
        
        return view('admin.website-content.index', compact('grouped'));
    }

    public function page($page)
    {
        $validPages = ['home', 'about', 'projects', 'contact', 'footer'];
        
        if (!in_array($page, $validPages)) {
            abort(404);
        }

        $contents = WebsiteContent::where('section', $page)->active()->ordered()->get();
        
        return view('admin.website-content.page', compact('contents', 'page'));
    }

    public function edit($id)
    {
        $content = WebsiteContent::findOrFail($id);
        return view('admin.website-content.edit', compact('content'));
    }

    public function update(Request $request, $id)
    {
        $content = WebsiteContent::findOrFail($id);
        
        $request->validate([
            'value_en' => 'required|string',
            'value_ar' => 'required|string',
        ]);

        $content->update([
            'value_en' => $request->value_en,
            'value_ar' => $request->value_ar,
        ]);

        return redirect()->back()->with('success', 'Content updated successfully!');
    }

    public function toggleActive($id)
    {
        $content = WebsiteContent::findOrFail($id);
        $content->update(['is_active' => !$content->is_active]);
        
        return redirect()->back()->with('success', 'Content status updated!');
    }

    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $file = $request->file('image');
        $path = $file->store('public/website-content');
        $url = Storage::url($path);

        return response()->json([
            'success' => true,
            'url' => $url
        ]);
    }
}
