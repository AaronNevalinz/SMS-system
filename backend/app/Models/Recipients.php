<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipients extends Model
{
    //
    protected $fillable = 
    [
        'campaign_id', 
        'number', 
        'status_code', 
        'status', 
        'cost', 
        'message_id'
    ];
    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }
}
