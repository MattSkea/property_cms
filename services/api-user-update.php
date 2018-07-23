<?php

/* * ********************************************** */
/* * *************CREATE USER SERVICE************** */
/* * ********************************************** */
/* CREATE PLACEHOLDERS AND POPULATE THEM WITH THE POSTED DATA */
$sId = $_POST['id'];
$sEmail = $_POST['email'];
$sFname = $_POST['fname'];
$sLname = $_POST['lname'];
$sMobile = $_POST['mobile'];
$sPassword = $_POST['password'];
$sUserTypeId = $_POST['userType'];

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
/* ITERATE THROUGH THE DATABASE */
$iUserCount = count($ajUsers);

for ($i = 0; $i < $iUserCount; $i++) {
    /* CHECK IF THE ID HAS A MATCHING VALUE ID */
    if ($sId == $ajUsers[$i]->id) {
        /* IF A MATCH IS FOUND, UPDATE THE VALUES WITH THE NEW ONES */
        /* BIND THE VALUES TO THE JSON */
        $ajUsers[$i]->email = $sEmail;
        $ajUsers[$i]->fname = $sFname;
        $ajUsers[$i]->lname = $sLname;
        $ajUsers[$i]->mobile = $sMobile;
        $ajUsers[$i]->password = $sPassword;
        /* CHECK IF THE USER TYPE IS BEING UPDATED */
        if ($sUserTypeId == 2) {
            /* UPDATE USER TO ADMIN */
            $sUserTypeRole = 'admin';
            $sUserTypeIcon = 'fa-users';
            /* update json within json */
            $ajUsers[$i]->userType->id = $sUserTypeId;
            $ajUsers[$i]->userType->role = $sUserTypeRole;
            $ajUsers[$i]->userType->icon = $sUserTypeIcon;
        } else if ($sUserTypeId == 3) {
            /* UPDATE USER TO SUPER ADMIN */
            $sUserTypeRole = 'super admin';
            $sUserTypeIcon = 'fa-user-secret';
            /* update json within json */
            $ajUsers[$i]->userType->id = $sUserTypeId;
            $ajUsers[$i]->userType->role = $sUserTypeRole;
            $ajUsers[$i]->userType->icon = $sUserTypeIcon;
        } else {
            /* UPDATE USER TO BASIC USER */
            $sUserTypeId = 1;
            $sUserTypeRole = 'user';
            $sUserTypeIcon = 'fa-user';
            /* update json within json */
            $ajUsers[$i]->userType->id = $sUserTypeId;
            $ajUsers[$i]->userType->role = $sUserTypeRole;
            $ajUsers[$i]->userType->icon = $sUserTypeIcon;
        }

        break;
    }
}

/* CONVERT THE JSON INTO A STRING SO THAT PHP CAN ECHO OUT THE CONTENT */
$sajUsers = json_encode($ajUsers, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
/* SAVE THE DATA TO THE FILE */
file_put_contents($sFileName, $sajUsers);

/* ECHO OUT THE RESULT */
echo '{"status":"ok"}';
?>
