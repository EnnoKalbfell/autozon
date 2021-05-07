<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarModel extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'carModel';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'carModel',
        'carModelYear',
        'fuel',
        'engineNumber',
        'vinNumber'
    ];

    public function car() {
        return $this->hasMany('App\Models\Car', 'carModelId');
    }
}
