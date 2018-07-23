<?php

/* * ******************************************* */
/* CHECK IF TEXT IS VALID */

function fnIsTextValid($sText, $iMin, $iMax) {
    /* CHECK IF STRING MATCHES MIN AND MAX RANGE */
    if (strlen($sText) < $iMin || strlen($sText) > $iMax) {
        return false;
    }
    return true;
}

/* CHECK IF NUMBER IS VALID */

function fnIsNumberValid($iNumb) {
    /* CREATE A TRIGGER TO TRACK IF THE VARIABLE IS A NUMBER */
    $bIsNumber = 0;

    /* CHECK IF VARIABLE IS A NUMBER */
    if (filter_var($iNumb, FILTER_VALIDATE_INT) == false) {
        $bIsNumber = 0;
    } else {
        $bIsNumber = 1;
    }
    return $bIsNumber;
}
