<?php

namespace App\Http\Controllers;

// Remove unused import statements
// use App\Models\User;
use Inertia\Inertia;
use App\Models\Dosen;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
// use Illuminate\Support\Facades\Storage;
// use App\Http\Requests\StoreAdminRequest;
// use Illuminate\Support\Facades\Redirect;
// use App\Http\Requests\UpdateAdminRequest;
// use App\Http\Requests\ProfileUpdateRequest;

class AdminDosenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('AdminDashboard/Dosen/Main', [
            'dosens' =>  Dosen::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
        public function create()
    {
        return Inertia::render('AdminDashboard/Dosen/Create', [
            "dosens" => Dosen::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->only(['name', 'jurusan', 'telp', 'bidang']);
        Dosen::create($data);

        return redirect()->route('dosen');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dosen  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Dosen $dosen)
    {
        return Inertia::render('AdminDashboard/Dosen/Show', [
            'dosens' => $dosen
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(Dosen $dosen)
    {
        return Inertia::render('AdminDashboard/Dosen/Edit', [
            'dosens' => $dosen
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Dosen $dosen): RedirectResponse
    {
        $dosen->update($request->validated());

        return redirect()->route('dosen');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dosen  $dosen
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dosen $dosen): RedirectResponse
    {
        $dosen->delete();
        
        return redirect()->route('dosen');
    }
     
}