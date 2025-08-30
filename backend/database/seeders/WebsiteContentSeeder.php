<?php

namespace Database\Seeders;

use App\Models\WebsiteContent;
use Illuminate\Database\Seeder;

class WebsiteContentSeeder extends Seeder
{
    public function run(): void
    {
        $contents = [
            // Hero Section
            [
                'section' => 'hero',
                'key' => 'journey_liner',
                'value_en' => 'JOURNEY OF DEVELOPMENT',
                'value_ar' => 'رحلة التطوير',
                'type' => 'text',
                'order' => 1
            ],
            [
                'section' => 'hero',
                'key' => 'journey_liner_image',
                'value_en' => '/assets/images/journey-of-development.png',
                'value_ar' => '/assets/images/journey-of-development.png',
                'type' => 'image',
                'order' => 2
            ],
            [
                'section' => 'hero',
                'key' => 'hero_video',
                'value_en' => '/assets/videos/hero-video.mp4',
                'value_ar' => '/assets/videos/hero-video.mp4',
                'type' => 'video',
                'order' => 3
            ],

            // About Section
            [
                'section' => 'about',
                'key' => 'title',
                'value_en' => 'About Alfauzan',
                'value_ar' => 'عن الفوزان',
                'type' => 'text',
                'order' => 1
            ],
            [
                'section' => 'about',
                'key' => 'subtitle',
                'value_en' => 'Leading Real Estate Development',
                'value_ar' => 'الريادة في تطوير العقارات',
                'type' => 'text',
                'order' => 2
            ],
            [
                'section' => 'about',
                'key' => 'description',
                'value_en' => 'Alfauzan is a leading real estate development company specializing in industrial cities and master plans.',
                'value_ar' => 'الفوزان هي شركة رائدة في تطوير العقارات متخصصة في المدن الصناعية والمخططات الرئيسية.',
                'type' => 'text',
                'order' => 3
            ],
            [
                'section' => 'about',
                'key' => 'ceo_image',
                'value_en' => '/assets/images/33.png',
                'value_ar' => '/assets/images/33.png',
                'type' => 'image',
                'order' => 4
            ],

            // Projects Section
            [
                'section' => 'projects',
                'key' => 'title',
                'value_en' => 'Commercial and Residency',
                'value_ar' => 'التجاري والسكني',
                'type' => 'text',
                'order' => 1
            ],
            [
                'section' => 'projects',
                'key' => 'subtitle',
                'value_en' => 'Industrial Cities and Real Estate Master Plans',
                'value_ar' => 'المدن الصناعية والمخططات العقارية الرئيسية',
                'type' => 'text',
                'order' => 2
            ],

            // Footer Section
            [
                'section' => 'footer',
                'key' => 'copyright',
                'value_en' => '© 2024 Alfauzan. All rights reserved.',
                'value_ar' => '© 2024 الفوزان. جميع الحقوق محفوظة.',
                'type' => 'text',
                'order' => 1
            ],

            // Navigation
            [
                'section' => 'navigation',
                'key' => 'logo',
                'value_en' => '/assets/images/logo.png',
                'value_ar' => '/assets/images/logo.png',
                'type' => 'image',
                'order' => 1
            ],

            // Contact Info
            [
                'section' => 'contact',
                'key' => 'phone',
                'value_en' => '+966 11 123 4567',
                'value_ar' => '+966 11 123 4567',
                'type' => 'text',
                'order' => 1
            ],
            [
                'section' => 'contact',
                'key' => 'email',
                        'value_en' => 'it@alfauzan.com',
        'value_ar' => 'it@alfauzan.com',
                'type' => 'text',
                'order' => 2
            ],
            [
                'section' => 'contact',
                'key' => 'address',
                'value_en' => 'Riyadh, Saudi Arabia',
                'value_ar' => 'الرياض، المملكة العربية السعودية',
                'type' => 'text',
                'order' => 3
            ]
        ];

        foreach ($contents as $content) {
            WebsiteContent::updateOrCreate(
                ['section' => $content['section'], 'key' => $content['key']],
                $content
            );
        }
    }
}
