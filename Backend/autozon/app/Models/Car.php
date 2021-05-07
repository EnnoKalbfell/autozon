<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'car';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'carBrand',
        'carModelId'
    ];

    public function carModel() {
        return $this->belongsTo('App\Models\CarModel', 'carModelId');
    }

    public function product() {
        return $this->belongsTo('App\Models\Product', 'carId');
    }
}
