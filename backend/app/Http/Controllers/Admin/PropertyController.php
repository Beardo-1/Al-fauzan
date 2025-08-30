<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{
    public function index()
    {
        $properties = Property::orderBy('created_at', 'desc')->paginate(10);
        return view('admin.properties.index', compact('properties'));
    }

    public function create()
    {
        return view('admin.properties.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'price' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'area' => 'nullable|string|max:255',
            'status' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'featured' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('properties', 'public');
            $validated['image'] = $imagePath;
        }

        $validated['featured'] = $request->has('featured');

        Property::create($validated);

        return redirect()->route('admin.properties.index')->with('success', 'Property created successfully!');
    }

    public function show(Property $property)
    {
        return view('admin.properties.show', compact('property'));
    }

    public function edit(Property $property)
    {
        return view('admin.properties.edit', compact('property'));
    }

    public function update(Request $request, Property $property)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'price' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'area' => 'nullable|string|max:255',
            'status' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'featured' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            if ($property->image) {
                Storage::disk('public')->delete($property->image);
            }
            $imagePath = $request->file('image')->store('properties', 'public');
            $validated['image'] = $imagePath;
        }

        $validated['featured'] = $request->has('featured');

        $property->update($validated);

        return redirect()->route('admin.properties.index')->with('success', 'Property updated successfully!');
    }

    public function destroy(Property $property)
    {
        if ($property->image) {
            Storage::disk('public')->delete($property->image);
        }
        
        $property->delete();

        return redirect()->route('admin.properties.index')->with('success', 'Property deleted successfully!');
    }

    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $imagePath = $request->file('image')->store('properties', 'public');

        return response()->json([
            'success' => true,
            'url' => Storage::url($imagePath)
        ]);
    }
}

