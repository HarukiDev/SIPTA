<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\Akademik; // Import model Akademik

class AkademikResources extends ResourceCollection
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
        $akademiks = Akademik::all();
    
        // Jika tidak ada data, kembalikan array kosong
        if ($akademiks->isEmpty()) {
            return ['akademiks' => []];
        }
    
        // Mengambil objek Akademik pertama untuk mendapatkan nama kolom
        $firstAkademik = $akademiks->first();
    
        // Mengembalikan array dengan format yang diinginkan
        return [
            'akademiks' => [
                'id' => $firstAkademik->id,
                'totalsks' => $firstAkademik->totalsks,
                'metodologi' => $firstAkademik->metodologi,
                'kkn' => $firstAkademik->kkn,
                'ipk' => $firstAkademik->ipk,
                's1' => $firstAkademik->s1,
                's2' => $firstAkademik->s2,
                's3' => $firstAkademik->s3,
                's4' => $firstAkademik->s4,
                's5' => $firstAkademik->s5,
                's6' => $firstAkademik->s6,
                's7' => $firstAkademik->s7,
                's8' => $firstAkademik->s8,
            ]
        ];
    }
    
}
