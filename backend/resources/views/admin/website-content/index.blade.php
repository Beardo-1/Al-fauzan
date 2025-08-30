<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Content Manager - Alfauzan Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3B82F6',
                        success: '#10B981',
                        warning: '#F59E0B',
                        danger: '#EF4444'
                    }
                }
            }
        }
    </script>
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
                        <a href="{{ route('admin.website-content.index') }}" class="text-primary font-medium">All Content</a>
                        <a href="{{ route('admin.projects.index') }}" class="text-gray-600 hover:text-gray-900">Projects</a>
                        <a href="{{ route('admin.properties.index') }}" class="text-gray-600 hover:text-gray-900">Properties</a>
                        <a href="{{ route('admin.news.index') }}" class="text-gray-600 hover:text-gray-900">News</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">Website Content Manager</h2>
                        <p class="text-gray-600 mt-1">Manage all website content organized by pages</p>
                    </div>
                    <a href="{{ route('admin.dashboard') }}" class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                        Back to Dashboard
                    </a>
                </div>

                @if(session('success'))
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                        {{ session('success') }}
                    </div>
                @endif

                <!-- Page Navigation -->
                <div class="bg-white shadow rounded-lg mb-8">
                    <div class="p-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">Manage Content by Page</h3>
                        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <a href="{{ route('admin.website-content.page', 'home') }}" 
                               class="p-4 text-center rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-blue-50 transition-colors">
                                <div class="text-3xl mb-3">🏠</div>
                                <div class="font-medium text-gray-900">Home Page</div>
                                <div class="text-sm text-gray-600 mt-1">Hero, navigation</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'about') }}" 
                               class="p-4 text-center rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-blue-50 transition-colors">
                                <div class="text-3xl mb-3">ℹ️</div>
                                <div class="font-medium text-gray-900">About Page</div>
                                <div class="text-sm text-gray-600 mt-1">Company info, CEO</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'projects') }}" 
                               class="p-4 text-center rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-blue-50 transition-colors">
                                <div class="text-3xl mb-3">🏗️</div>
                                <div class="font-medium text-gray-900">Projects Page</div>
                                <div class="text-sm text-gray-600 mt-1">Project listings</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'contact') }}" 
                               class="p-4 text-center rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-blue-50 transition-colors">
                                <div class="text-3xl mb-3">📞</div>
                                <div class="font-medium text-gray-900">Contact Page</div>
                                <div class="text-sm text-gray-600 mt-1">Contact details</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'footer') }}" 
                               class="p-4 text-center rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-blue-50 transition-colors">
                                <div class="text-3xl mb-3">📄</div>
                                <div class="font-medium text-gray-900">Footer</div>
                                <div class="text-sm text-gray-600 mt-1">Copyright, links</div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- All Content Overview -->
                <div class="bg-white shadow rounded-lg">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900">All Content Overview</h3>
                        <p class="text-sm text-gray-600">View all content organized by sections</p>
                    </div>
                    <div class="p-6">
                        @if($grouped->count() > 0)
                            @foreach($grouped as $section => $contents)
                                <div class="mb-8 last:mb-0">
                                    <div class="flex justify-between items-center mb-4">
                                        <h4 class="text-lg font-semibold text-gray-900 capitalize">{{ $section }} Section</h4>
                                        <a href="{{ route('admin.website-content.page', $section) }}" 
                                           class="text-primary hover:text-blue-700 text-sm font-medium">
                                            Manage {{ $section }} →
                                        </a>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        @foreach($contents->take(4) as $content)
                                            <div class="border border-gray-200 rounded-lg p-4">
                                                <div class="flex justify-between items-start mb-2">
                                                    <h5 class="font-medium text-gray-900">{{ $content->key }}</h5>
                                                    <span class="text-xs px-2 py-1 rounded {{ $content->is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800' }}">
                                                        {{ $content->is_active ? 'Active' : 'Inactive' }}
                                                    </span>
                                                </div>
                                                <p class="text-sm text-gray-600">{{ Str::limit($content->value_en, 80) }}</p>
                                            </div>
                                        @endforeach
                                        @if($contents->count() > 4)
                                            <div class="border border-gray-200 rounded-lg p-4 flex items-center justify-center">
                                                <a href="{{ route('admin.website-content.page', $section) }}" 
                                                   class="text-primary hover:text-blue-700 font-medium">
                                                    View all {{ $contents->count() }} items →
                                                </a>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            @endforeach
                        @else
                            <div class="text-center py-12">
                                <div class="text-6xl mb-4">📝</div>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2">No content found</h3>
                                <p class="text-gray-600">No content has been added yet. Start by managing a specific page.</p>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
