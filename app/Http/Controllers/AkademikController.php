<?php

namespace App\Http\Controllers;

use App\Models\Akademik;
use App\Http\Requests\StoreAkademikRequest;
use App\Http\Requests\UpdateAkademikRequest;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Profiler\Profile;

class AkademikController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Edit', [
            'Akademiks' => Akademik::all()->map(function ($akademik) {
                return [
                    'id' => $akademik->id,
                    'totalsks' => $akademik->totalsks,
                    'metodologi' => $akademik->metodologi,
                    'kkn' => $akademik->kkn,
                    'ipk' => $akademik->ipk,
                    's1' => $akademik->s1,
                    's2' => $akademik->s2,
                    's3' => $akademik->s3,
                    's4' => $akademik->s4,
                    's5' => $akademik->s5,
                    's6' => $akademik->s6,
                    's7' => $akademik->s7,
                    's8' => $akademik->s8,
                ];
            }),
        ]);
    }

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreAkademikRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAkademikRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Akademik  $akademik
     * @return \Illuminate\Http\Response
     */
    public function show(Akademik $akademik)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Akademik  $akademik
     * @return \Illuminate\Http\Response
     */
    public function edit(Akademik $akademik)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAkademikRequest  $request
     * @param  \App\Models\Akademik  $akademik
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAkademikRequest $request, Akademik $akademik)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Akademik  $akademik
     * @return \Illuminate\Http\Response
     */
    public function destroy(Akademik $akademik)
    {
        //
    }
}
