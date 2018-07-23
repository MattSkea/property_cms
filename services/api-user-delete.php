<?php

/* * ********************************************** */
/* * ************DELETE USER SERVICE*************** */
/* * ********************************************** */
/* CREATE PLACEHOLDERS AND POPULATE THEM WITH THE POSTED DATA */
$sId = $_GET['id'];

/* LOCATE THE FILE BEING POPULATED */
$sFileName = '../data-users.txt';

/* EXTRACT THE STRING CONTENT OF THE FILE */
$sajUsers = file_get_contents($sFileName);
/* DECODE THE STRING TEXT IN THE FILE */
$ajUsers = json_decode($sajUsers);

/* CHECK IF THE FILE HAS AN ARRAY */
if (!is_array($ajUsers)) {
    /* PRINT OUT ERROR MESSAGE */
    echo '{"status":"error", "id":"001", "message":"could not work with the database"}';
    /* EXIT PHP */
    exit;
}

/* * ********************************************** */
/* * *****************ON SUCCESS******************* */
/* ITERATE THROUGH THE DATABASE */
for ($i = 0; $i < count($ajUsers); $i++) {
    /* CHECK IF THE ID HAS A MATCHING VALUE ID */
    if ($sId == $ajUsers[$i]->id) {
        /* IF A MATCH IS FOUND, SPLICE/DELETE IT FROM THE ARRAY */
        array_splice($ajUsers, $i, 1);
        /* BREAK OUT OF PHP */
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