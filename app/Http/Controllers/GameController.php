<?php

namespace App\Http\Controllers;

use App\Events\GameJoined;
use App\Models\Game;
//use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return inertia('Dashboard', [
                'games' => Game::with(['playerOne', 'playerTwo', 'playerThree'])
                ->where('player_one_id', '!=', $request->user()->id)
                ->where(function (Builder $query){
                    $query->whereNull('player_two_id')
                        ->orWhereNull('player_three_id');
                })
                ->oldest()
                ->get()
        ]);
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

        GameJoined::dispatch($game);

        return to_route('games.show', $game);
    }

    public function join(Request $request, Game $game)
    {
        Gate::authorize('join', $game);

        if($game->player_two_id == null){
            $game->update(['player_two_id' => $request->user()->id]);
        }else{
            $game->update(['player_three_id' => $request->user()->id]);
        }

        GameJoined::dispatch($game);
        return to_route('games.show', $game);

    }

    /**
     * Display the specified resource.
     */
    public function show(Game $game)
    {
        //
        $game->load(['playerOne', 'playerTwo', 'playerThree']);
        return inertia("Games/Show", compact("game"));

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Game $game)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Game $game)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Game $game)
    {
        //
    }
}
