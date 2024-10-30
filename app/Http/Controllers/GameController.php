<?php

namespace App\Http\Controllers;

use App\Models\game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $game = Game::create(['player_one_id' => $request->user()->id]);

        return to_route('games.show', $game);    
    }

    /**
     * Display the specified resource.
     */
    public function show(game $game)
    {
        return inertia("Games/Show");
        // return Inertia::render('Auth/ConfirmPassword');
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(game $game)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, game $game)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(game $game)
    {
        //
    }
}
