<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-office';

    protected static ?string $navigationGroup = 'Projects';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Tabs::make('Project Details')
                    ->tabs([
                        Tabs\Tab::make('Basic Information')
                            ->schema([
                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('title')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(fn (string $state, callable $set) => $set('slug', Str::slug($state))),
                                        
                                        TextInput::make('slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true),
                                    ]),

                                Grid::make(3)
                                    ->schema([
                                        Select::make('category')
                                            ->options([
                                                'Industrial Cities' => 'Industrial Cities',
                                                'Industrial Plans' => 'Industrial Plans',
                                                'Commercial Projects' => 'Commercial Projects',
                                                'Residential Projects' => 'Residential Projects',
                                                'Mixed Use' => 'Mixed Use',
                                            ])
                                            ->required(),

                                        TextInput::make('location')
                                            ->required()
                                            ->maxLength(255),

                                        TextInput::make('year')
                                            ->maxLength(4),
                                    ]),

                                Grid::make(2)
                                    ->schema([
                                        TextInput::make('value')
                                            ->maxLength(50),

                                        TextInput::make('area')
                                            ->maxLength(100),
                                    ]),

                                Select::make('status')
                                    ->options([
                                        'Planned' => 'Planned',
                                        'In Progress' => 'In Progress',
                                        'Completed' => 'Completed',
                                        'On Hold' => 'On Hold',
                                    ])
                                    ->default('Planned')
                                    ->required(),

                                Toggle::make('featured')
                                    ->label('Featured Project')
                                    ->default(false),
                            ]),

                        Tabs\Tab::make('Content')
                            ->schema([
                                Textarea::make('description')
                                    ->rows(3)
                                    ->maxLength(500),

                                RichEditor::make('long_description')
                                    ->label('Detailed Description')
                                    ->columnSpanFull(),

                                TextInput::make('video_url')
                                    ->label('Video URL')
                                    ->url()
                                    ->maxLength(255),
                            ]),

                        Tabs\Tab::make('Images')
                            ->schema([
                                FileUpload::make('image')
                                    ->label('Main Image')
                                    ->image()
                                    ->imageEditor()
                                    ->imageCropAspectRatio('16:9')
                                    ->directory('projects')
                                    ->visibility('public'),

                                FileUpload::make('images')
                                    ->label('Project Gallery')
                                    ->multiple()
                                    ->image()
                                    ->imageEditor()
                                    ->imageCropAspectRatio('16:9')
                                    ->directory('projects/gallery')
                                    ->visibility('public')
                                    ->maxFiles(10),
                            ]),

                        Tabs\Tab::make('Features & Specs')
                            ->schema([
                                Repeater::make('features')
                                    ->schema([
                                        TextInput::make('feature')
                                            ->required()
                                            ->maxLength(255),
                                    ])
                                    ->defaultItems(0)
                                    ->reorderableWithButtons()
                                    ->collapsible()
                                    ->itemLabel(fn (array $state): ?string => $state['feature'] ?? null),

                                Section::make('Specifications')
                                    ->schema([
                                        Grid::make(2)
                                            ->schema([
                                                TextInput::make('specifications.totalArea')
                                                    ->label('Total Area'),

                                                TextInput::make('specifications.industrialZones')
                                                    ->label('Industrial Zones')
                                                    ->numeric(),

                                                TextInput::make('specifications.commercialAreas')
                                                    ->label('Commercial Areas')
                                                    ->numeric(),

                                                TextInput::make('specifications.parkingSpaces')
                                                    ->label('Parking Spaces')
                                                    ->numeric(),

                                                TextInput::make('specifications.securityPosts')
                                                    ->label('Security Posts')
                                                    ->numeric(),

                                                TextInput::make('specifications.roadNetwork')
                                                    ->label('Road Network'),
                                            ]),
                                    ])
                                    ->collapsible(),
                            ]),

                        Tabs\Tab::make('Timeline')
                            ->schema([
                                Repeater::make('timeline')
                                    ->schema([
                                        TextInput::make('phase')
                                            ->required()
                                            ->maxLength(255),

                                        TextInput::make('date')
                                            ->required()
                                            ->maxLength(50),

                                        Select::make('status')
                                            ->options([
                                                'completed' => 'Completed',
                                                'in-progress' => 'In Progress',
                                                'planned' => 'Planned',
                                            ])
                                            ->default('planned')
                                            ->required(),
                                    ])
                                    ->defaultItems(0)
                                    ->reorderableWithButtons()
                                    ->collapsible()
                                    ->itemLabel(fn (array $state): ?string => $state['phase'] ?? null),
                            ]),

                        Tabs\Tab::make('Investment Opportunities')
                            ->schema([
                                Repeater::make('investment_opportunities')
                                    ->schema([
                                        TextInput::make('opportunity')
                                            ->required()
                                            ->maxLength(255),
                                    ])
                                    ->defaultItems(0)
                                    ->reorderableWithButtons()
                                    ->collapsible()
                                    ->itemLabel(fn (array $state): ?string => $state['opportunity'] ?? null),
                            ]),

                        Tabs\Tab::make('SEO')
                            ->schema([
                                Textarea::make('meta_description')
                                    ->rows(3)
                                    ->maxLength(160)
                                    ->helperText('Maximum 160 characters for optimal SEO'),

                                TextInput::make('meta_keywords')
                                    ->maxLength(255)
                                    ->helperText('Comma-separated keywords'),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('Main Image')
                    ->circular()
                    ->size(50),

                TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->limit(50),

                BadgeColumn::make('category')
                    ->colors([
                        'primary' => 'Industrial Cities',
                        'success' => 'Industrial Plans',
                        'warning' => 'Commercial Projects',
                        'danger' => 'Residential Projects',
                    ]),

                TextColumn::make('location')
                    ->searchable()
                    ->limit(30),

                BadgeColumn::make('status')
                    ->colors([
                        'success' => 'Completed',
                        'warning' => 'In Progress',
                        'danger' => 'On Hold',
                        'secondary' => 'Planned',
                    ]),

                TextColumn::make('year')
                    ->sortable(),

                ToggleColumn::make('featured')
                    ->label('Featured'),

                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('category')
                    ->options([
                        'Industrial Cities' => 'Industrial Cities',
                        'Industrial Plans' => 'Industrial Plans',
                        'Commercial Projects' => 'Commercial Projects',
                        'Residential Projects' => 'Residential Projects',
                        'Mixed Use' => 'Mixed Use',
                    ]),

                SelectFilter::make('status')
                    ->options([
                        'Planned' => 'Planned',
                        'In Progress' => 'In Progress',
                        'Completed' => 'Completed',
                        'On Hold' => 'On Hold',
                    ]),

                TernaryFilter::make('featured')
                    ->label('Featured Projects'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
