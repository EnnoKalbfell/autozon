<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserOrder extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'userOrder';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'userId',
        'oderTimeStamp'
    ];

    public function product() {
        return $this->belongsToMany('App\Models\Product', 'product_order', 'orderId', 'productId');
    }
}
