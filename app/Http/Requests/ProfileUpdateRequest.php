<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'nim' => ['string', 'max:255'],
            'dospem' => ['string', 'max:255'],
            'alamat' => ['string', 'max:255'],
            'telp' => ['string', 'max:255'],
            'image' => ['string', 'max:255'],
            'tempatlahir' => ['string', 'max:255'],
            'tanggallahir' => ['string', 'max:255'],
            'jeniskelamin' => ['string', 'max:255'],
            'kewarganegaraan' => ['string', 'max:255'],
            'agama' => ['string', 'max:255'],
        ];
    }
}
