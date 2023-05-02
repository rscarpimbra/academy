<?php

namespace App\Http\Controllers;

use GuzzleHttp\Psr7\Response;
use Inertia\Inertia;

class AboutController extends Controller
{


    public function show()
    {

        return Inertia::render('About');
    }
}
