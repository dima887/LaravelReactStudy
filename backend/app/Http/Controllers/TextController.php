<?php

namespace App\Http\Controllers;

use App\Helpers\Text\TextConvert;
use App\Http\Requests\NumberOnDigitRequest;
use Illuminate\Http\Request;

class TextController extends Controller
{
    /**
     * Convert number by digits.
     * 10000000 => 10.000.000
     *
     * @param NumberOnDigitRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function numberOnDigit(NumberOnDigitRequest $request)
    {
        return response()->json(['digit' => TextConvert::numberOnDigit($request->number)], 200);
    }

    /**
     * Remove spaces before punctuation marks.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function removeSpaces(Request $request)
    {
        return response()->json(['text' => TextConvert::removeSpaces($request->removeSpaces)], 200);
    }

    /**
     * Remove duplicate words
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function removeDuplicateWords(Request $request)
    {
        return response()->json(['text' => TextConvert::removeDuplicateWords($request->removeDuplicateWords)], 200);
    }
}
