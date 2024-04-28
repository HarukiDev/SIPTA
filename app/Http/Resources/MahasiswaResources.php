<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MahasiswaResources extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // Mengambil semua data Akademik
        $mahasiswa = User::all();
    
        // Jika tidak ada data, kembalikan array kosong
        if ($mahasiswa->isEmpty()) {
            return ['mahasiswa' => []];
        }
    
        // Mengambil objek Akademik pertama untuk mendapatkan nama kolom
        $firstMahasiswa = $mahasiswa->first();
    
        // Mengembalikan array dengan format yang diinginkan
        return [
            'mahasiswa' => [
                'id' => $firstMahasiswa->id,
                'name' => $firstMahasiswa->name,
                'nim' => $firstMahasiswa->nim,
                'email' => $firstMahasiswa->email,
                // 'ipk' => $firstMahasiswa->ipk,
                // 's1' => $firstMahasiswa->s1,
                // 's2' => $firstMahasiswa->s2,
                // 's3' => $firstMahasiswa->s3,
                // 's4' => $firstMahasiswa->s4,
                // 's5' => $firstMahasiswa->s5,
                // 's6' => $firstMahasiswa->s6,
                // 's7' => $firstMahasiswa->s7,
                // 's8' => $firstMahasiswa->s8,
            ]
        ];
    }
}
