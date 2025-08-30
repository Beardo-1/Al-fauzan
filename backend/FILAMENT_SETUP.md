# 🎛️ Laravel Filament Admin Panel Setup

## 📋 Prerequisites

1. **Composer** installed on your system
2. **PHP 8.1+** with required extensions
3. **Laravel** project set up

## 🚀 Installation Steps

### 1. Install Filament (if not already installed)
```bash
composer require filament/filament:"^3.0"
```

### 2. Run Migrations
```bash
php artisan migrate
```

### 3. Create Storage Link
```bash
php artisan storage:link
```

### 4. Run Seeders
```bash
php artisan db:seed
```

### 5. Start the Server
```bash
php artisan serve
```

## 🔐 Admin Access

**URL**: `http://localhost:8000/admin`

**Default Credentials**:
- **Email**: `it@alfauzan.com`
- **Password**: `password123`

## 📁 File Structure

```
backend/
├── app/
│   ├── Filament/
│   │   ├── Resources/
│   │   │   └── ProjectResource.php
│   │   ├── Resources/ProjectResource/Pages/
│   │   │   ├── ListProjects.php
│   │   │   ├── CreateProject.php
│   │   │   └── EditProject.php
│   │   └── Widgets/
│   │       └── ProjectStatsWidget.php
│   ├── Models/
│   │   ├── Project.php
│   │   └── Admin.php
│   └── Providers/Filament/
│       └── AdminPanelProvider.php
├── database/
│   ├── migrations/
│   │   ├── create_projects_table.php
│   │   └── create_admins_table.php
│   └── seeders/
│       ├── AdminSeeder.php
│       └── ProjectSeeder.php
└── config/
    └── auth.php
```

## 🎯 Features

### Project Management
- ✅ **Create/Edit/Delete** projects
- ✅ **Image Upload** with editor
- ✅ **Gallery Management** (multiple images)
- ✅ **Rich Text Editor** for descriptions
- ✅ **Tabbed Interface** for organized data entry
- ✅ **SEO Fields** (meta description, keywords)
- ✅ **Status Management** (Planned, In Progress, Completed, On Hold)
- ✅ **Featured Projects** toggle
- ✅ **Categories** and filtering
- ✅ **Timeline Management**
- ✅ **Features & Specifications**
- ✅ **Investment Opportunities**

### Dashboard
- ✅ **Project Statistics** widget
- ✅ **Quick Overview** of all projects
- ✅ **Filtering** and search capabilities
- ✅ **Bulk Actions** (delete multiple projects)

### Image Management
- ✅ **Drag & Drop** upload
- ✅ **Image Editor** (crop, resize, rotate)
- ✅ **Multiple Image Upload**
- ✅ **Organized Storage** in `storage/app/public/projects/`
- ✅ **Public URLs** for frontend access

## 🔧 Configuration

### Environment Variables
Add to your `.env` file:
```env
APP_URL=http://localhost:8000
FILESYSTEM_DISK=public
```

### File Storage
Images are stored in:
- Main images: `storage/app/public/projects/`
- Gallery images: `storage/app/public/projects/gallery/`

### Customization
- **Brand Name**: "Al Fauzan Admin"
- **Primary Color**: Amber
- **Navigation Groups**: Content Management, Projects, Properties, News & Media, Settings

## 📱 Usage Guide

### Adding a New Project
1. Go to Admin Panel → Projects
2. Click "Add New Project"
3. Fill in the **Basic Information** tab
4. Add **Content** (description, video URL)
5. Upload **Images** (main image + gallery)
6. Configure **Features & Specifications**
7. Add **Timeline** items
8. List **Investment Opportunities**
9. Set **SEO** information
10. Click "Create"

### Managing Existing Projects
1. Go to Admin Panel → Projects
2. Click on any project to edit
3. Use the tabbed interface to navigate sections
4. Update any information as needed
5. Click "Save Changes"

### Image Management
- **Main Image**: Single image with 16:9 aspect ratio
- **Gallery**: Up to 10 images with editing capabilities
- **Image Editor**: Crop, resize, and adjust images before saving

## 🔒 Security

- **Admin Authentication** with separate guard
- **CSRF Protection** enabled
- **File Upload Validation** (images only)
- **Role-based Access** (can be extended)

## 🚀 Next Steps

1. **Add More Resources**:
   - Properties
   - News
   - Partners
   - Careers

2. **Enhance Security**:
   - Add roles and permissions
   - Implement 2FA
   - Add audit logging

3. **Improve UX**:
   - Custom dashboard widgets
   - Advanced filtering
   - Export functionality

4. **API Integration**:
   - Connect to frontend
   - Add webhooks
   - Real-time updates

## 🆘 Troubleshooting

### Common Issues

1. **Images not displaying**:
   - Run `php artisan storage:link`
   - Check file permissions
   - Verify storage disk configuration

2. **Admin login not working**:
   - Run `php artisan db:seed --class=AdminSeeder`
   - Check admin credentials
   - Verify auth configuration

3. **Filament not loading**:
   - Clear cache: `php artisan cache:clear`
   - Clear config: `php artisan config:clear`
   - Check composer dependencies

### Support
For issues or questions, check:
- [Filament Documentation](https://filamentphp.com/docs)
- [Laravel Documentation](https://laravel.com/docs)
- Project logs in `storage/logs/`





