<?php

require_once "api-functions.php";

/* * ********************************************** */
/* * ************LOCK SYSTEM SERVICE*************** */
/* * ********************************************** */
/* CHECK IF THE SYSTEM HAS USERS */
$bSystemHasUsers = fnCheckUsers();

/* IF THERE ARNT ANY USERS IN THE SYSTEM */
if (!$bSystemHasUsers) {
    /* IF TRUE ERROR */
    echo '{"status" : "error"}';
} else {
    /* SUCCESS */
    /* IF THERE ARE USERS */
    echo '{"status" : "ok"}';
}

