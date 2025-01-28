<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Connects extends Model
{
    //
    protected $fillable = ['user_id', 'connects'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
