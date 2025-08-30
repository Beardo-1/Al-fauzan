<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PropertyResource\Pages;
use App\Models\Property;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PropertyResource extends Resource
{
    protected static ?string $model = Property::class;

    protected static ?string $navigationIcon = 'heroicon-o-home-modern';
    protected static ?string $navigationGroup = 'Content';
    protected static ?string $navigationLabel = 'Properties';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Property')
                    ->schema([
                        Forms\Components\TextInput::make('title')->required()->maxLength(255),
                        Forms\Components\TextInput::make('type')->maxLength(100),
                        Forms\Components\TextInput::make('price')->maxLength(100),
                        Forms\Components\TextInput::make('location')->required()->maxLength(255),
                        Forms\Components\TextInput::make('bedrooms')->numeric()->default(0),
                        Forms\Components\TextInput::make('bathrooms')->numeric()->default(0),
                        Forms\Components\TextInput::make('area')->maxLength(100),
                        Forms\Components\Select::make('status')
                            ->options([
                                'For Sale' => 'For Sale',
                                'Sold' => 'Sold',
                                'For Rent' => 'For Rent',
                            ])->default('For Sale'),
                        Forms\Components\Toggle::make('featured')->inline(false),
                    ])->columns(2),
                Forms\Components\Section::make('Media')
                    ->schema([
                        Forms\Components\TextInput::make('image')->label('Image URL')->maxLength(2048),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('type')->sortable(),
                Tables\Columns\TextColumn::make('location')->limit(20),
                Tables\Columns\TextColumn::make('price')->sortable(),
                Tables\Columns\IconColumn::make('featured')->boolean(),
                Tables\Columns\TextColumn::make('status')->badge(),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('featured'),
                Tables\Filters\SelectFilter::make('status')->options([
                    'For Sale' => 'For Sale',
                    'Sold' => 'Sold',
                    'For Rent' => 'For Rent',
                ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageProperties::route('/'),
        ];
    }
}
