<?php

require_once './api-functions.php';

/* * ********************************************** */
/* * **CHECK IF USER OWNS ANY PROPERTIES SERVICE*** */
/* * ********************************************** */
if (fnActiveUserSession()) {
    if (fnHasAccess(2)) {
//    echo "ADMIN";

        $bOwnsProperties = 1;

        echo $bOwnsProperties;
    } else if (fnHasAccess(1)) {
//    echo "USER";
        /* RETRIEVE THE BOOLEAN THAT CHECKES IF A USER OWNS ANY PROPERTIES */
        $bOwnsProperties = fnOwnsAnyProperties();

        echo $bOwnsProperties;
    }
}
?>