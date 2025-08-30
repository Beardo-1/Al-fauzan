<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WebsiteContentResource\Pages;
use App\Models\WebsiteContent;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\FileUpload;

class WebsiteContentResource extends Resource
{
    protected static ?string $model = WebsiteContent::class;

    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';
    protected static ?string $navigationGroup = 'Website Management';
    protected static ?string $navigationLabel = 'Website Content';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Content Information')
                    ->schema([
                        Forms\Components\Select::make('section')
                            ->options([
                                'hero' => 'Hero Section',
                                'about' => 'About Section',
                                'projects' => 'Projects Section',
                                'footer' => 'Footer Section',
                                'navigation' => 'Navigation',
                                'contact' => 'Contact Information',
                            ])
                            ->required(),
                        Forms\Components\TextInput::make('key')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Select::make('type')
                            ->options([
                                'text' => 'Text',
                                'image' => 'Image',
                                'video' => 'Video',
                                'boolean' => 'Boolean',
                                'json' => 'JSON',
                            ])
                            ->required()
                            ->default('text'),
                        Forms\Components\Toggle::make('is_active')
                            ->label('Active')
                            ->default(true),
                        Forms\Components\TextInput::make('order')
                            ->numeric()
                            ->default(0),
                    ])->columns(2),

                Forms\Components\Section::make('Content Values')
                    ->schema([
                        Forms\Components\Textarea::make('value_en')
                            ->label('English Content')
                            ->required()
                            ->rows(4),
                        Forms\Components\Textarea::make('value_ar')
                            ->label('Arabic Content')
                            ->required()
                            ->rows(4),
                    ])->columns(2),

                Forms\Components\Section::make('File Upload (for images/videos)')
                    ->schema([
                        Forms\Components\FileUpload::make('file_upload')
                            ->label('Upload File')
                            ->image()
                            ->directory('website-content')
                            ->visibility('public')
                            ->helperText('Upload image for image type content'),
                    ])->collapsible(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('section')
                    ->searchable()
                    ->sortable()
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'hero' => 'primary',
                        'about' => 'success',
                        'projects' => 'warning',
                        'footer' => 'gray',
                        'navigation' => 'info',
                        'contact' => 'danger',
                    }),
                Tables\Columns\TextColumn::make('key')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'text' => 'gray',
                        'image' => 'success',
                        'video' => 'warning',
                        'boolean' => 'info',
                        'json' => 'danger',
                    }),
                Tables\Columns\TextColumn::make('value_en')
                    ->label('English')
                    ->limit(30)
                    ->searchable(),
                Tables\Columns\TextColumn::make('value_ar')
                    ->label('Arabic')
                    ->limit(30)
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->label('Active'),
                Tables\Columns\TextColumn::make('order')
                    ->sortable(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('section')
                    ->options([
                        'hero' => 'Hero Section',
                        'about' => 'About Section',
                        'projects' => 'Projects Section',
                        'footer' => 'Footer Section',
                        'navigation' => 'Navigation',
                        'contact' => 'Contact Information',
                    ]),
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'text' => 'Text',
                        'image' => 'Image',
                        'video' => 'Video',
                        'boolean' => 'Boolean',
                        'json' => 'JSON',
                    ]),
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Active Status'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\Action::make('toggle_active')
                    ->label('Toggle Active')
                    ->action(fn (WebsiteContent $record) => $record->update(['is_active' => !$record->is_active]))
                    ->requiresConfirmation(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('order');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWebsiteContents::route('/'),
            'create' => Pages\CreateWebsiteContent::route('/create'),
            'edit' => Pages\EditWebsiteContent::route('/{record}/edit'),
        ];
    }
}
