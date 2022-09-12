<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddCarRequest extends FormRequest
{
    /**
     * Indicates if the validator should stop on the first rule failure.
     *
     * @var bool
     */
    protected $stopOnFirstFailure = true;

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
            'brand' => 'required',
            'model' => 'required',
            'price' => ['required', 'integer'],
            'year' => ['required', 'numeric', 'max:2022'],
            'mileage' => ['required', 'integer'],
            'description' => 'required',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'brand.required' => 'Введите марку автомобиля',
            'model.email' => 'Введите модель автомобиля',
            'price.required' => 'Введите цену автомобиля',
            'price.integer' => 'Введите корректную цену',
            'year.required' => 'Введите год автомобиля',
            'year.numeric' => 'Введите корректный год',
            'year.max' => 'Введите корректный год',
            'mileage.required' => 'Введите пробег автомобиля',
            'mileage.integer' => 'Введите корректный пробег',
            'description.required' => 'Заполните описание автомобиля',
        ];
    }
}
