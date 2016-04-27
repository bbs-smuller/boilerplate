<?php

namespace App\Http\Controllers;

use Igniweb\Foundation\Controllers\Backend\BaseController;

class HomeController extends BaseController
{
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
