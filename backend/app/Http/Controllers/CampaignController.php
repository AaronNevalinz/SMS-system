<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $campaigns = Campaign::with('recipients')->get();

        return (
            ['campaigns' => $campaigns]
        );
        //
        // $campaigns = Campaign::all();

        // return (
        //     ['campaigns'=>$campaigns]
        // );
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
        
        //
        $fields = $request->validate([
            'title'=>'required|string',
            'message'=>'required|string',
            'status'=>'required',
            'audience'=>'string',
        ]);

        $campaign = Campaign::create($fields);

        return (
            ['campaign'=>$campaign]
        );

    }

    /**
     * Display the specified resource.
     */
    public function show(Campaign $campaign)
    {
        //
        return (
            ['campaign'=>$campaign]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Campaign $campaign)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Campaign $campaign)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Campaign $campaign)
    {
        //
        $campaign->delete();
        return (["Campaign"=>$campaign, 'message'=>'Campaign Deleted']);
    }
}
