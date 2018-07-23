<?php

/* * ********************************************** */
/* * ***********CREATE USER SERVICE**************** */
/* * ********************************************** */
/* CREATE PLACEHOLDERS AND POPULATE THEM WITH THE POSTED DATA */
$sEmail = $_POST['email'];
$sFname = $_POST['fname'];
$sLname = $_POST['lname'];
$sMobile = $_POST['mobile'];
$sPassword = $_POST['password'];
$sUserTypeId = 1; /* USER TYPES RANGE FROM 1 to 10, 1:basic logged user */
$sUserTypeRole = "user"; /* USER ROLES, initially assign user, update user with admin or sadmin */
$sUserTypeIcon = "fa-user";

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

/*IF THE USERS MODEL IS EMPTY, CREATE A SUPER ADMIN*/
$countAjUsers = count($ajUsers);
if ($countAjUsers == 0) {
    $sUserTypeId = 3; /* USER TYPES RANGE FROM 1 to 10, 1:basic logged user */
    $sUserTypeRole = "super admin"; /* USER ROLES, initially assign user, update user with admin or sadmin */
    $sUserTypeIcon = "fa-user-secret";
}

/* CREATE A STRING THAT LOOKS LIKE JSON */
$sUser = '{}';

/* DECODE THE STRING CREATED */
$jUser = json_decode($sUser);

/* BIND THE VALUES TO THE JSON */
$jUser->id = count($ajUsers) + 22325;
$jUser->email = $sEmail;
$jUser->fname = $sFname;
$jUser->lname = $sLname;
$jUser->mobile = $sMobile;
$jUser->password = $sPassword;
/* create json within json */
$jUser->userType->id = $sUserTypeId;
$jUser->userType->role = $sUserTypeRole;
$jUser->userType->icon = $sUserTypeIcon;

/* PUSH THE USER BEING CREATED INTO THE ARRAY */
array_push($ajUsers, $jUser);

/* CONVERT THE ARRAY OF JSON INTO STRING TEXT, MAKE THE TEXT READABLE AND SETUP UNICODE RECOGNITION */
$sajUsers = json_encode($ajUsers, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

/* PUSH THE DATA TO THE FILE */
file_put_contents($sFileName, $sajUsers);

echo '{"status":"ok"}';
?>