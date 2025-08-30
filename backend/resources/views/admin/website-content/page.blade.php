<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ ucfirst($page) }} Page Content - Alfauzan Admin</title>
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
                        <a href="{{ route('admin.website-content.index') }}" class="text-gray-600 hover:text-gray-900">All Content</a>
                        <a href="{{ route('admin.website-content.page', 'home') }}" class="{{ $page === 'home' ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900' }}">Home</a>
                        <a href="{{ route('admin.website-content.page', 'about') }}" class="{{ $page === 'about' ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900' }}">About</a>
                        <a href="{{ route('admin.website-content.page', 'projects') }}" class="{{ $page === 'projects' ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900' }}">Projects</a>
                        <a href="{{ route('admin.website-content.page', 'contact') }}" class="{{ $page === 'contact' ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900' }}">Contact</a>
                        <a href="{{ route('admin.website-content.page', 'footer') }}" class="{{ $page === 'footer' ? 'text-primary font-medium' : 'text-gray-600 hover:text-gray-900' }}">Footer</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900">{{ ucfirst($page) }} Page Content</h2>
                        <p class="text-gray-600 mt-1">Manage all content for the {{ $page }} page</p>
                    </div>
                    <div class="flex gap-2">
                        <a href="{{ route('admin.website-content.index') }}" class="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                            All Content
                        </a>
                        <a href="{{ route('admin.dashboard') }}" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Dashboard
                        </a>
                    </div>
                </div>

                @if(session('success'))
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                        {{ session('success') }}
                        <div class="mt-2 text-sm">
                            <strong>Frontend URL:</strong> <a href="http://localhost:3000" target="_blank" class="text-blue-600 hover:underline">http://localhost:3000</a>
                            <br>
                            <small>Changes should appear on your React frontend immediately!</small>
                        </div>
                    </div>
                @endif

                <!-- Page Navigation -->
                <div class="bg-white shadow rounded-lg mb-6">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <a href="{{ route('admin.website-content.page', 'home') }}" 
                               class="p-3 text-center rounded-lg border-2 {{ $page === 'home' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 hover:border-primary hover:bg-blue-50' }}">
                                <div class="text-2xl mb-2">🏠</div>
                                <div class="font-medium">Home</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'about') }}" 
                               class="p-3 text-center rounded-lg border-2 {{ $page === 'about' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 hover:border-primary hover:bg-blue-50' }}">
                                <div class="text-2xl mb-2">ℹ️</div>
                                <div class="font-medium">About</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'projects') }}" 
                               class="p-3 text-center rounded-lg border-2 {{ $page === 'projects' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 hover:border-primary hover:bg-blue-50' }}">
                                <div class="text-2xl mb-2">🏗️</div>
                                <div class="font-medium">Projects</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'contact') }}" 
                               class="p-3 text-center rounded-lg border-2 {{ $page === 'contact' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 hover:border-primary hover:bg-blue-50' }}">
                                <div class="text-2xl mb-2">📞</div>
                                <div class="font-medium">Contact</div>
                            </a>
                            <a href="{{ route('admin.website-content.page', 'footer') }}" 
                               class="p-3 text-center rounded-lg border-2 {{ $page === 'footer' ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 hover:border-primary hover:bg-blue-50' }}">
                                <div class="text-2xl mb-2">📄</div>
                                <div class="font-medium">Footer</div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Content Items -->
                @if($contents->count() > 0)
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        @foreach($contents as $content)
                            <div class="bg-white shadow rounded-lg p-6">
                                <div class="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-900">{{ $content->key }}</h3>
                                        <p class="text-sm text-gray-600">Type: {{ $content->type }}</p>
                                        <p class="text-sm text-gray-600">Order: {{ $content->order }}</p>
                                    </div>
                                    <div class="flex gap-2">
                                        <button onclick="editContent({{ $content->id }})" 
                                                class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                                            Edit
                                        </button>
                                        <form method="POST" action="{{ route('admin.website-content.toggle', $content->id) }}" class="inline">
                                            @csrf
                                            @method('PATCH')
                                            <button type="submit" 
                                                    class="px-3 py-1 rounded text-sm {{ $content->is_active ? 'bg-success text-white' : 'bg-gray-500 text-white' }}">
                                                {{ $content->is_active ? 'Active' : 'Inactive' }}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 class="font-medium text-gray-700 mb-2">English:</h4>
                                        @if($content->type === 'image')
                                            <img src="{{ $content->value_en }}" alt="Content" class="w-full h-32 object-cover rounded">
                                        @else
                                            <p class="text-gray-900 text-sm bg-gray-50 p-3 rounded">{{ Str::limit($content->value_en, 150) }}</p>
                                        @endif
                                    </div>
                                    <div>
                                        <h4 class="font-medium text-gray-700 mb-2">Arabic:</h4>
                                        @if($content->type === 'image')
                                            <img src="{{ $content->value_ar }}" alt="Content" class="w-full h-32 object-cover rounded">
                                        @else
                                            <p class="text-gray-900 text-sm bg-gray-50 p-3 rounded" dir="rtl">{{ Str::limit($content->value_ar, 150) }}</p>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <div class="text-center py-12 bg-white rounded-lg shadow">
                        <div class="text-6xl mb-4">📝</div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">No content found</h3>
                        <p class="text-gray-600">No content has been added for the {{ $page }} page yet.</p>
                    </div>
                @endif
            </div>
        </main>
    </div>

    <!-- Edit Modal -->
    <div id="editModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50">
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold text-gray-900">Edit Content</h3>
                        <button onclick="closeModal()" class="text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="editForm">
                        <!-- Form will be loaded here -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function editContent(id) {
            fetch(`/admin/website-content/${id}/edit`)
                .then(response => response.text())
                .then(html => {
                    document.getElementById('editForm').innerHTML = html;
                    document.getElementById('editModal').classList.remove('hidden');
                });
        }

        function closeModal() {
            document.getElementById('editModal').classList.add('hidden');
        }

        // Close modal when clicking outside
        document.getElementById('editModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    </script>
</body>
</html>
