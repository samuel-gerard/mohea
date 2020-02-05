<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();;

        return response()->json($projects->toArray());
    }

    /**
     * Create a new project
     */
    public function create($type)
    {
        return view('pages.' . $type);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $project = new Project();

        $project->user_id = auth()->user()->id;
        $project->name = $request['name'];
        $project->type = $request['type'];
        $project->content = $request['content'];

        return json_encode($project->save());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        // Get all about only on project (see $project->id)
        $project = Project::where('id', $project)
                        ->where('id_user', auth()->user()->id)
                        ->take(1)
                        ->get();

        return response()->json($project->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $project = Project::find($project);

        $project->name = $request['name'];
        $project->content = $request['content'];

        return json_encode($project->save());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $project = Project::find($project);

        return json_encode($project->delete());

    }
}
