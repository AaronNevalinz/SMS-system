<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    /** @use HasFactory<\Database\Factories\CampaignFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'message',
        'status',
        'recipients',
    ];
    public function recipients()
    {
        return $this->hasMany(Recipients::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
