<?php

session_start(); /* required to start session */
/* * ********************************************** */
/* * *************LOGIN USER SERVICE*************** */
/* * ********************************************** */
/* CREATE PLACEHOLDERS AND GET THE POSTED DATA */
$sEmail = $_POST['email'];
$sPassword = $_POST['password'];

/* LOCATE THE FILE BEING POPULATED */
$sFileName = '../data-users.txt';
$sajUsers = file_get_contents($sFileName);
/* DECODE THE STRING TEXT IN THE FILE */
$ajUsers = json_decode($sajUsers);

/* CHECK IF THE DATA IS IN AN ARRAY */
if (!is_array($ajUsers)) {
    echo '{"status":"error", "id":"001", "message":"could not work with the database and creating a new database"}';
    /* IF THE DATA ISN'T AN ARRAY, CREATE ONE */
    $ajUsers = [];
}

/* * ********************************************** */
/* * *****************ON SUCCESS******************* */
// print_r($ajUsers);

/* ITERATE THROUGH THE DATABASE */
for ($i = 0; $i < count($ajUsers); $i++) {
    /* CHECK IF THE DETAILS MATCH */
    if ($sEmail == $ajUsers[$i]->email && $sPassword == $ajUsers[$i]->password) {
        $iId = $ajUsers[$i]->id;
        $sEmail = $ajUsers[$i]->email;
        $sUserType = $ajUsers[$i]->userType->id;
        $sFName = $ajUsers[$i]->fname;
        $sLName = $ajUsers[$i]->lname;
        $sMobile = $ajUsers[$i]->mobile;
        $sPassword = $ajUsers[$i]->password;
        
        /* CREATE THE USERS SESSION COOKIE */
        $_SESSION['id'] = $iId;
        $_SESSION['email'] = $sEmail;
        $_SESSION['userType'] = $sUserType;
        $_SESSION['fname'] = $sFName;
        $_SESSION['lname'] = $sLName;
        $_SESSION['mobile'] = $sMobile;
        $_SESSION['password'] = $sPassword;

        /* convert the json to a string that can be passsed to the client */
        $userSession = json_encode($_SESSION, JSON_UNESCAPED_UNICODE);

        // print_r($_SESSION);
        echo '{"status" : "ok", "userSession" : 1}';
        /* exit the loop */
        exit;
    }
}

/* IF NOT MATCHES TO THE DETAILS ARE FOUND, RETURN AN ERROR MESSAGE */
echo '{"status" : "error"}';
?>