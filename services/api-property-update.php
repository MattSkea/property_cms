<?php

require_once "api-functions.php";
/* * ********************************************** */
/* * *********CREATE PROPERTY SERVICE************** */
/* * ********************************************** */
/* CREATE PLACEHOLDERS AND POPULATE THEM WITH THE POSTED DATA */
$sId = $_POST['id'];
$sAuctionType = $_POST['auction-type'];
$sAbodeType = $_POST['abode-type'];
$sPostalCode = $_POST['postal-code'];
$sAddress = $_POST['address'];
$sCity = $_POST['city'];
$iPrice = $_POST['price'];
$iSize = $_POST['size'];
$iTotalRooms = $_POST['total-rooms'];

/* REFORMAT THE PROPERTY PRICE */
$iPrice = fnRemoveNumberFormat($iPrice);
$iPrice = fnCreateReadableNumber($iPrice);

/* LOCATE THE FILE BEING POPULATED */
$sFileName = '../data-properties.txt';
$sajProperties = file_get_contents($sFileName);
/* DECODE THE STRING TEXT IN THE FILE */
$ajProperties = json_decode($sajProperties);


/* CHECK IF THE DATA IS IN AN ARRAY */
if (!is_array($ajProperties)) {
    echo '{"status":"error", "id":"001", "message":"could not work with the database and creating a new database"}';
    /* IF THE DATA ISN'T AN ARRAY, CREATE ONE */
    $ajProperties = [];
}

/* * ********************************************** */
/* * *****************ON SUCCESS******************* */
/* ITERATE THROUGH THE DATABASE */
for ($i = 0; $i < count($ajProperties); $i++) {
    /* CHECK IF THE ID HAS A MATCHING VALUE ID */
    if ($sId == $ajProperties[$i]->id) {

        /* IF A MATCH IS FOUND, UPDATE THE VALUES WITH THE NEW ONES */
        /* BIND THE VALUES TO THE JSON */
        $ajProperties[$i]->auctionType = $sAuctionType;
        $ajProperties[$i]->abodeType = $sAbodeType;
        $ajProperties[$i]->postalCode = $sPostalCode;
        $ajProperties[$i]->address = $sAddress;
        $ajProperties[$i]->city = $sCity;
        $ajProperties[$i]->price = $iPrice;
        $ajProperties[$i]->size = $iSize;
        $ajProperties[$i]->totalRooms = $iTotalRooms;

        break;
    }
}

/* CONVERT THE JSON INTO A STRING SO THAT PHP CAN ECHO OUT THE CONTENT */
$sajProperties = json_encode($ajProperties, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
/* SAVE THE DATA TO THE FILE */
file_put_contents($sFileName, $sajProperties);

/* ECHO OUT THE RESULT */
echo '{"status":"ok"}';
?>