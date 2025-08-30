<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Content - Alfauzan Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="min-h-screen">
        <!-- Navigation -->
        <nav class="bg-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-bold text-gray-800">Alfauzan Admin</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="{{ route('admin.dashboard') }}" class="text-gray-600 hover:text-gray-900">Dashboard</a>
                        <a href="{{ route('admin.website-content.index') }}" class="text-blue-600 font-medium">Website Content</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-900">Edit Content</h2>
                    <a href="{{ route('admin.website-content.index') }}" class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                        Back to Content
                    </a>
                </div>

                <div class="bg-white shadow rounded-lg">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900">
                            {{ $content->key }} ({{ $content->section }} Section)
                        </h3>
                        <p class="text-sm text-gray-600">Type: {{ $content->type }}</p>
                    </div>
                    
                    <form method="POST" action="{{ route('admin.website-content.update', $content->id) }}" class="p-6">
                        @csrf
                        @method('PUT')
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    English Content
                                </label>
                                @if($content->type === 'image')
                                    <div class="mb-4">
                                        <img src="{{ $content->value_en }}" alt="Current Image" class="w-full h-32 object-cover rounded">
                                    </div>
                                    <input type="text" name="value_en" value="{{ $content->value_en }}" 
                                           class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                           placeholder="Image URL">
                                @else
                                    <textarea name="value_en" rows="6" 
                                              class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                              placeholder="Enter English content">{{ $content->value_en }}</textarea>
                                @endif
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    Arabic Content
                                </label>
                                @if($content->type === 'image')
                                    <div class="mb-4">
                                        <img src="{{ $content->value_ar }}" alt="Current Image" class="w-full h-32 object-cover rounded">
                                    </div>
                                    <input type="text" name="value_ar" value="{{ $content->value_ar }}" 
                                           class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                           placeholder="Image URL">
                                @else
                                    <textarea name="value_ar" rows="6" 
                                              class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                              placeholder="Enter Arabic content" dir="rtl">{{ $content->value_ar }}</textarea>
                                @endif
                            </div>
                        </div>
                        
                        <div class="flex gap-4 mt-6">
                            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                                Update Content
                            </button>
                            <a href="{{ route('admin.website-content.index') }}" class="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700">
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</body>
</html>

