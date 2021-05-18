<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'product';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'dealer',
        'manufacturer',
        'price',
        'streetLegality',
        'carId',
        'shortDescription',
        'category',
        'serialNumber',
        'preview',
        'preview2',
        'preview3',
        'hidden'
    ];

    public function car() {
        return $this->hasOne('App\Models\Car', 'carId');
    }

    public function user() {
        return $this->hasOne('App\Models\User', 'dealer');
    }

    public function userOrder() {
        return $this->belongsToMany('App\Models\UserOrder','product_order', 'productId', 'orderId');
    }
}
