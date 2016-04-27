<?php

namespace App\Http\Controllers;

class HomeController extends \Igniweb\Foundation\Controllers\Backend\BaseController {
	/**
	 * Display home page.
	 *
	 * @return \Illuminate\Contracts\View\View
	 */
	public function index()
	{
		return view('welcome');
	}
}
