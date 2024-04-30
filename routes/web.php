<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AkademikController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DosenController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TugasAkhirController;
use App\Models\TugasAkhir;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

route::get('/profile/update', function() {
    return Inertia::render('Profile/Update');
})->middleware(['auth', 'verified'])->name('update');

route::get('/profile/reset_password', function() {
    return Inertia::render('Profile/ResetPassword');
})->middleware(['auth', 'verified'])->name('reset');

Route::get('/dospem', [DosenController::class, 'index'])->name('dospem');

// Route::get('/tugasakhir', function() {
//     return Inertia::render('TugasAkhir');
// })->middleware(['auth', 'verified'])->name('tugasakhir');
Route::middleware('auth')->group(function () {
    Route::get('/tugasakhir', [TugasAkhirController::class, 'create'])->name('tugasakhir');
    Route::post('/tugasakhir', [TugasAkhirController::class, 'store'])->name('tugasakhir.store');
    // Route::patch('/tugasakhir', [TugasAkhirController::class, 'update'])->name('tugasakhir.update');
    // Route::delete('/tugasakhir', [TugasAkhirController::class, 'destroy'])->name('tugasakhir.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');
    Route::get('/admin/create', [AdminController::class, 'create'])->name('admin.create');
    Route::post('/admin', [AdminController::class, 'store'])->name('admin.store');
    Route::delete('/admin/{user}', [AdminController::class, 'destroy'])->name('admin.destroy');
    Route::get('/admin/{user}', [AdminController::class, 'show'])->name('admin.show');
    Route::get('/admin/{user}/edit', [AdminController::class, 'edit'])->name('admin.edit');
    Route::patch('/admin/{user}', [AdminController::class, 'update'])->name('admin.update');
});

Route::get('/profile/avatar', function() {
    return Inertia::render("Profile/Avatar");
})->middleware(['auth', 'verified'])->name('avatar');

Route::post('/profile/avatar', [ProfileController::class, 'store'])->middleware(['auth', 'verified'])->name('avatar.store');