<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Akademik;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\AkademikResources;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfileController extends Controller
{   
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        // $akademiks = Akademik::all()->map(function ($akademik) {
        //     return [
        //         'id' => $akademik->id,
        //         'totalsks' => $akademik->totalsks,
        //         'metodologi' => $akademik->metodologi,
        //         'kkn' => $akademik->kkn,
        //         'ipk' => $akademik->ipk,
        //         's1' => $akademik->s1,
        //         's2' => $akademik->s2,
        //         's3' => $akademik->s3,
        //         's4' => $akademik->s4,
        //         's5' => $akademik->s5,
        //         's6' => $akademik->s6,
        //         's7' => $akademik->s7,
        //         's8' => $akademik->s8,
        //     ];
        // });
    
        // dd($akademiks);
    
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'akademik' => AkademikResources::collection(Akademik::all()),
        ]);
    }
    
    

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');

    }
    public function store(Request $request)
    {
        // Validasi dan penyimpanan gambar
        if ($request->file('image')) {
            // Simpan path gambar ke dalam variabel
            $path = $request->file('image')->store('post-images');
            
            // Perbarui kolom 'image' pada entri pengguna yang sedang terautentikasi
            $request->user()->update(['image' => $path]);
        }
    
        // Mengembalikan respons Inertia dengan pesan kesuksesan
        return Inertia::render('Profile/Avatar')->with("success", "Foto berhasil diupload");
    }
    
}
