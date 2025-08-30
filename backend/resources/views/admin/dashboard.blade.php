<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alfauzan Admin Dashboard</title>
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
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
                
                <!-- Stats Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="p-5">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt class="text-sm font-medium text-gray-500 truncate">Total Projects</dt>
                                        <dd class="text-lg font-medium text-gray-900">{{ $stats['projects_count'] }}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-5 py-3">
                            <div class="text-sm">
                                <a href="{{ route('admin.projects.index') }}" class="font-medium text-blue-700 hover:text-blue-900">View all projects</a>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="p-5">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt class="text-sm font-medium text-gray-500 truncate">Total Properties</dt>
                                        <dd class="text-lg font-medium text-gray-900">{{ $stats['properties_count'] }}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-5 py-3">
                            <div class="text-sm">
                                <a href="{{ route('admin.properties.index') }}" class="font-medium text-green-700 hover:text-green-900">View all properties</a>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="p-5">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <div class="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt class="text-sm font-medium text-gray-500 truncate">Total News</dt>
                                        <dd class="text-lg font-medium text-gray-900">{{ $stats['news_count'] }}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-5 py-3">
                            <div class="text-sm">
                                <a href="{{ route('admin.news.index') }}" class="font-medium text-purple-700 hover:text-purple-900">View all news</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="bg-white shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <a href="{{ route('admin.projects.create') }}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                Add New Project
                            </a>
                            <a href="{{ route('admin.properties.create') }}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                                Add New Property
                            </a>
                            <a href="{{ route('admin.news.create') }}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                                Add News Article
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Website Content Management -->
                <div class="bg-white shadow rounded-lg mt-6">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Website Content Management</h3>
                        <p class="text-sm text-gray-600 mb-4">Manage content for different pages of your website</p>
                        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <a href="{{ route('admin.website-content.page', 'home') }}" class="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                <div class="text-2xl mb-2">🏠</div>
                                <div class="font-medium text-gray-900">Home</div>
                                <div class="text-xs text-gray-600">Hero, navigation</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'about') }}" class="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                <div class="text-2xl mb-2">ℹ️</div>
                                <div class="font-medium text-gray-900">About</div>
                                <div class="text-xs text-gray-600">Company info</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'projects') }}" class="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                <div class="text-2xl mb-2">🏗️</div>
                                <div class="font-medium text-gray-900">Projects</div>
                                <div class="text-xs text-gray-600">Project content</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'contact') }}" class="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                <div class="text-2xl mb-2">📞</div>
                                <div class="font-medium text-gray-900">Contact</div>
                                <div class="text-xs text-gray-600">Contact details</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'footer') }}" class="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                <div class="text-2xl mb-2">📄</div>
                                <div class="font-medium text-gray-900">Footer</div>
                                <div class="text-xs text-gray-600">Copyright, links</div>
                            </a>
                        </div>
                        <div class="mt-4">
                            <a href="{{ route('admin.website-content.index') }}" class="text-blue-600 hover:text-blue-700 font-medium">
                                View All Content →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
