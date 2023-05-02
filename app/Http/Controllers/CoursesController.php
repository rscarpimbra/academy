<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CoursesController extends Controller
{
    public function show(Request $request)
    {

        return Inertia::render('Courses/Show');
    }


    /* Passing as parameter the Language id. */
    public function all( $Language )
    {

        /* View to return all the Courses with the Language  */
        return DB::table('v_courses')->where('language_id', $Language)->orderBy('title')->get();
    }
}
