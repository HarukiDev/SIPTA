<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\TugasAkhir;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Symfony\Component\HttpKernel\Profiler\Profile;

class TugasAkhirController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // public function index()
    // {
    //     return Inertia::render('TugasAkhir');
    // }

/**
 * Show the form for creating a new resource.
 *
 * @return \Illuminate\Http\Response
 */
public function create()
{
    return Inertia::render('TugasAkhir', [
        'tugasAkhir' => TugasAkhir::all() // Ubah 'TugasAkhir' menjadi 'tugasAkhir' untuk konsistensi
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
    $validatedData = $request->validate([
        'nim' => 'required|max:20',
        'title' => 'required|max:255',
        'topik' => 'required',
        'excerpt' => 'required',
        'dospem' => 'required',
        'jurusan' => 'required',
        'tahunajaran' => 'required|max:5',
        'laporan' => 'required', // Ubah aturan validasi untuk laporan
    ]);

    if ($request->hasFile('laporan')) { // Periksa apakah file laporan ada
        $path = $request->file('laporan')->store('post-files'); // Simpan file laporan

        $validatedData['laporan'] = $path; // Simpan path file laporan ke dalam array $validatedData
    }

    TugasAkhir::create($validatedData); // Buat objek TugasAkhir dengan data yang divalidasi

    return Redirect::to('/'); // Redirect ke halaman utama setelah berhasil
}



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TugasAkhir  $tugasAkhir
     * @return \Illuminate\Http\Response
     */
    public function show(TugasAkhir $tugasAkhir)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TugasAkhir  $tugasAkhir
     * @return \Illuminate\Http\Response
     */
    public function edit(TugasAkhir $tugasAkhir)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TugasAkhir  $tugasAkhir
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TugasAkhir $tugasAkhir)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TugasAkhir  $tugasAkhir
     * @return \Illuminate\Http\Response
     */
    public function destroy(TugasAkhir $tugasAkhir)
    {
        //
    }

    /**
     * Get the user that owns the TugasAkhirController
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
    }
}
