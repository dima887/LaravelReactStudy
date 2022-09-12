<?php

namespace App\Helpers\Text;

class TextConvert
{
    /**
     * Convert number by digits.
     * 10000000 => 10.000.000
     *
     * @param int $number
     * @return array|string|string[]|null
     */
    static public function numberOnDigit(int $number)
    {
        $pattern = '#(?<=\d)(?=(\d{3})+(?!\d))#';

        $replacement = '.';

        return preg_replace($pattern, $replacement, $number);
    }

    /**
     * Remove spaces before punctuation marks.
     *
     * @param string $str
     * @return array|string|string[]|null
     */
    static public function removeSpaces(string $str)
    {
        $pattern = '#\s+(?=[.,?!])#';

        $replacement = '';

        return preg_replace($pattern, $replacement, $str);
    }

    /**
     * Remove duplicate words
     *
     * @param string $str
     * @return array|string|string[]|null
     */
    static public function removeDuplicateWords(string $str)
    {
        $pattern = '#\b(\S+)\b\s?(?=.*\b\1\b.*)#msu';

        $replacement = '$2';

        return preg_replace($pattern, $replacement, $str);
    }
}
