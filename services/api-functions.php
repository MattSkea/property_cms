<?php

session_start(); /* START THE SESSION FOR THIS PAGE */

/* * ******************************************* */
/* * *************REUSABLE FUNCTIONS************ */

/* * ******************************************* */
/* CREATE READABLE NUMBERS FROM UNFORMATTED NUMBERS */

function fnCreateReadableNumber($number) {
    /* setup string format */
    /* number_format replaces subject with a comma, placed with . apart from the last 2 values */
    $tempString = number_format($number, 2, ",", ".");

    return $tempString;
}

/* * ******************************************* */
/* REMOVE NUMBER FORMAT FROM READABLE NUMBERS */

function fnRemoveNumberFormat($string) {
    /* remove string format */
    $tempString = $string;
    /* remove the demimal format */
    $tempString = str_replace(",00", "", $tempString);

    /* setup regex pattern */
    $pattern = '/[^0-9]*/';
    /* preg_replace searches subject for pattern and replaces them with replacement */
    $tempNumber = preg_replace($pattern, '', $tempString);

    return $tempNumber;
}

/* * ******************************************* */

/* * ******************************************* */
/* CREATE A SESSION IF THERE ISN'T ONE ACTIVE */

function fnCreateSession() {
    if (!isset($_SESSION)) {
        session_start();
    }
}

/* * ******************************************* */
/* CHECK IF THE SESSION HAS A LOGGED USER */

function fnActiveUserSession() {
    /* initialize a bolean to check if there is a session id */
    $bCheck = 0;
    /* check if there is a session id */
    if (isset($_SESSION['id'])) {
        /* if true, change the check to true */
        $bCheck = 1;
        /* return the result */
        return $bCheck;
    } else {
        /* if false, change the check to true */
        $bCheck = 0;
        /* return the result */
        return $bCheck;
    }
    return $bCheck;
}

/* * ******************************************* */
/* CHECK IF THE USE HAS ACCESS VIA userType */

function fnHasAccess($accessLevel) {
    /* initialize a boolean to check if the user has access */
    $bCheck = 0;
    /* check if the user is logged in */
    if (!isset($_SESSION['userType'])) {
        /* if false, change the check to true */
        $bCheck = 0;
        /* return the result */
        return $bCheck;
    }
    /* check if the user has a high enough accessLevel */
    if ($accessLevel <= $_SESSION['userType']) {
        /* if true, change the check to true */
        $bCheck = 1;
        /* return the result */
        return $bCheck;
    }
    /* return the result */
    return $bCheck;
}

/* * ******************************************* */
/* CHECK IF THE USER OWNS ANY PROPERTIES - FOR property-layout */

function fnOwnsAnyProperties() {
    /* initialize a boolean to check if the owns anything */
    $bCheck = 0;

    /* LOCATE THE FILE BEING READ */
    $sFileName = '../data-properties.txt';
    $sajProperties = file_get_contents($sFileName);
    /* DECODE THE STRING TEXT IN THE FILE */
    $ajProperties = json_decode($sajProperties);

    if (fnActiveUserSession()) {
        /* GET THE CURRENTLY LOGGED Properties ID FROM THE ACTIVE SESSION */
        $iCurrentPropertyId = $_SESSION['id'];



        /* CHECK IF THE DATA IS IN AN ARRAY */
        if (!is_array($ajProperties)) {
            echo '{"status":"error", "id":"001", "message":"could not work with the database and creating a new database"}';
            /* IF THE DATA ISN'T AN ARRAY, CREATE ONE */
            $ajProperties = [];
        }

        /* iterate over data-Properties and check if the Property has ownership of a property */
        $iPropertyCount = count($ajProperties);
        for ($i = 0; $i < $iPropertyCount; $i++) {
            /* retrieve the current search Property id */
            $iCurrentSearchId = $ajProperties[$i]->ownerId;
            /* CHECK IF THE CURRENT SESSION ID MATCHES THE CURRENT SEARCH ITEMS ID */
            if ($iCurrentPropertyId == $iCurrentSearchId) {
                $bCheck = 1;
            }
        }
    }

    return $bCheck;
}

function fnOwnsAnyPropertiesForRoot() {
    /* initialize a boolean to check if the owns anything */
    $bCheck = 0;

    /* LOCATE THE FILE BEING READ */
    $sFileName = './data-properties.txt';
    $sajProperties = file_get_contents($sFileName);
    /* DECODE THE STRING TEXT IN THE FILE */
    $ajProperties = json_decode($sajProperties);

    /* GET THE CURRENTLY LOGGED Properties ID FROM THE ACTIVE SESSION */
    $iCurrentPropertyId = $_SESSION['id'];



    /* CHECK IF THE DATA IS IN AN ARRAY */
    if (!is_array($ajProperties)) {
        echo '{"status":"error", "id":"001", "message":"could not work with the database and creating a new database"}';
        /* IF THE DATA ISN'T AN ARRAY, CREATE ONE */
        $ajProperties = [];
    }

    /* iterate over data-Properties and check if the Property has ownership of a property */
    $iPropertyCount = count($ajProperties);
    for ($i = 0; $i < $iPropertyCount; $i++) {
        /* retrieve the current search Property id */
        $iCurrentSearchId = $ajProperties[$i]->ownerId;
        /* CHECK IF THE CURRENT SESSION ID MATCHES THE CURRENT SEARCH ITEMS ID */
        if ($iCurrentPropertyId == $iCurrentSearchId) {
            $bCheck = 1;
        }
    }
    return $bCheck;
}

/* * ******************************************* */
/* CHECK IF THE USER OWNS A SPECIFIC PROPERTY */

function fnOwnsThisProperty($ownerId) {
    /* initialize a boolean to check if the owns anything */
    $bCheck = 0;

    /* fnOwnsAnyProperties WORKS */
    /** CHECK IF USER OWNS SPECIFIC PROPERTY * */
    if ($ownerId == $_SESSION['id']) {
        $bCheck = 1;
        return $bCheck;
    }

    return $bCheck;
}

/* * ******************************************* */
/* FETCH SESSION DATA HERE TO AVOID CLUSTERING CRUD SERVICES WITH session_start() */

function fnGetUserId() {
    $iUserId = $_SESSION['id'];
    return $iUserId;
}

/* * ******************************************* */
/* CHECK IF THERE ARE USERS IN THE MODEL */

function fnCheckUsers() {
    $bHasUsers = 0;

    $sFileName = '../data-users.txt';

    /* EXTRACT THE STRING CONTENT OF THE FILE */
    $sajProperties = file_get_contents($sFileName);
    /* DECODE THE STRING CONTENT THE WAS RETRIEVED FROM THE FILE */
    $ajProperties = json_decode($sajProperties);
    /* COUNT THE AMOUND OF USERS */
    $countUsers = count($ajProperties);

    if ($countUsers >= 1) {
        $bHasUsers = 1;
    } else {

        $bHasUsers = 0;
    }
    return $bHasUsers;
}

/* * ******************************************* */
/* FETCH THE SESSION DATA */

function getSessionInfo() {
    /* setup an array to hold the session info */
    $ajSession = [];
    /* get the session data for the user */
    $jSession = $_SESSION;
    /* convert the array to a string */
    $sjSession = json_encode($jSession, JSON_UNESCAPED_UNICODE);
    /* echo out the string */
    echo $sjSession;
}

/* * ******************************************* */
/* UPLOAD FILES TO THE SERVER AND RETURN AN ARRAY OF THE FILE NAMES */

function fnUploadImage($files, $id) {
    $ajFiles = [];
    for ($i = 0; $i < count($_FILES); $i++) {
        /* setup a placeholder for the temp file name */
        $sTempFilename = $_FILES['file-' . $i]['tmp_name'];

        /* setup a placeholder for the file name */
        /* replace the files name */
        $sFileName = explode('.', $_FILES['file-' . $i]["name"]);
        $sFileName = $id . '-' . $i . '.' . end($sFileName);

//        $sFileName = $_FILES['file-' . $i]['name'];
        /* setup a placeholder for the file upload path */
        $sFilePath = './../images/houses/';

        /* upload the files the the server */
        move_uploaded_file($sTempFilename, $sFilePath . $sFileName);

        /* create a json object for the file */
        $sjFile = '{}';
        /* decode the json string to json */
        $jFile = json_decode($sjFile);
        /* create a placeholder for the variables */
        $jFile->image = $sFileName;
        /* push the file to the array that will be returned on callback */
        array_push($ajFiles, $jFile);
    }
    /* return the file names */
    return $ajFiles;
}



?>