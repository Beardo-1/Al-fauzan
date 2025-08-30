<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Property;
use App\Models\News;
use App\Models\Career;
use App\Models\Partner;
use App\Models\Office;

class AdminController extends Controller
{
    public function dashboard()
    {
        $stats = [
            'projects_count' => Project::count(),
            'properties_count' => Property::count(),
            'news_count' => News::count(),
            'careers_count' => Career::where('is_active', true)->count(),
            'partners_count' => Partner::count(),
            'offices_count' => Office::count(),
        ];

        return view('admin.dashboard', compact('stats'));
    }
}

