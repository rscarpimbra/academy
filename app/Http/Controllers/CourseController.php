<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CourseController extends Controller
{

    public function show($uuid){
        dd($uuid);
        //$toReturn = "";

        //return Inertia::render('Course/Show');
    }
}
