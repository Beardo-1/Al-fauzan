<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects Management - Alfauzan Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="min-h-screen">
        <!-- Navigation -->
        <nav class="bg-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="{{ route('admin.dashboard') }}" class="text-xl font-bold text-gray-800">Alfauzan Admin</a>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="{{ route('admin.projects.index') }}" class="text-blue-600 font-medium">Projects</a>
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
                    <h2 class="text-2xl font-bold text-gray-900">Projects Management</h2>
                    <a href="{{ route('admin.projects.create') }}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                        Add New Project
                    </a>
                </div>

                @if(session('success'))
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {{ session('success') }}
                    </div>
                @endif

                <!-- Projects Table -->
                <div class="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul class="divide-y divide-gray-200">
                        @forelse($projects as $project)
                            <li>
                                <div class="px-4 py-4 flex items-center justify-between">
                                    <div class="flex items-center">
                                        @if($project->image)
                                            <img src="{{ asset('storage/' . $project->image) }}" alt="{{ $project->title }}" class="h-12 w-12 rounded-lg object-cover mr-4">
                                        @else
                                            <div class="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                                                <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                </svg>
                                            </div>
                                        @endif
                                        <div>
                                            <h3 class="text-lg font-medium text-gray-900">{{ $project->title }}</h3>
                                            <p class="text-sm text-gray-500">{{ $project->category }} • {{ $project->location }}</p>
                                            <p class="text-sm text-gray-500">{{ $project->status }} • {{ $project->area }}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        @if($project->featured)
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Featured
                                            </span>
                                        @endif
                                        <a href="{{ route('admin.projects.edit', $project) }}" class="text-blue-600 hover:text-blue-900">Edit</a>
                                        <form action="{{ route('admin.projects.destroy', $project) }}" method="POST" class="inline" onsubmit="return confirm('Are you sure you want to delete this project?')">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="text-red-600 hover:text-red-900">Delete</button>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        @empty
                            <li class="px-4 py-8 text-center text-gray-500">
                                No projects found. <a href="{{ route('admin.projects.create') }}" class="text-blue-600 hover:text-blue-900">Create your first project</a>
                            </li>
                        @endforelse
                    </ul>
                </div>

                <!-- Pagination -->
                @if($projects->hasPages())
                    <div class="mt-6">
                        {{ $projects->links() }}
                    </div>
                @endif
            </div>
        </main>
    </div>
</body>
</html>

