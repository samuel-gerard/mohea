<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'caption', 'content', 'type'];

    /**
     * Indicate that a project has one User
     */
    public function user() {
        return $this->belongsTo('App\User');
    }
}
