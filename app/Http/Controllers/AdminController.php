<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Admin;
use App\Models\Dosen;
use App\Models\Akademik;
use App\Models\TugasAkhir;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreAdminRequest;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\UpdateAdminRequest;
use App\Http\Requests\ProfileUpdateRequest;



class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('AdminDashboard/Main', [
            'akademiks' => Akademik::all(),
            'tugasAkhirs' => TugasAkhir::all(),
            'dosens' =>  Dosen::all(),
            'mahasiswa' => User::all()->map(function ($mahasiswa) {
                return [
                    'id' => $mahasiswa->id,
                    'name' => $mahasiswa->name,
                    'nim' => $mahasiswa->nim,
                    'email' => $mahasiswa->email,
                ];
            }),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('AdminDashboard/Create', [
            "mahasiswa" => User::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) //  : RedirectResponse
    {
        $validateData = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'nim' => 'required',
            'password' => 'required',
        ]);

        $validateData['password'] = bcrypt($validateData['password']);

        User::create($validateData);

        return to_route('/admin');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return Inertia::render('AdminDashboard/Show', [
            'user' => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return Inertia::render('AdminDashboard/Edit', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAdminRequest $request,User $user): RedirectResponse
    {
        $user->update($request->validated());

        return redirect()->route('admin');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {   
        if($user->image) {
            Storage::delete([$user->image]);
        }

        $user->delete();
    }
}
