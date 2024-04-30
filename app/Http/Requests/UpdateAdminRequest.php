<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;


class UpdateAdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', function ($attribute, $value, $fail) {
                $user = User::where('email', $value)->first();
                if ($user && $user->id !== $this->user->id) {
                    $fail('The email has already been taken.');
                }
            }],
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
