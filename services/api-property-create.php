<?php

require_once "api-functions.php";

/* * ********************************************** */
/* * *********CREATE PROPERTY SERVICE************** */
/* * ********************************************** */
/* CREATE PLACEHOLDERS AND POPULATE THEM WITH THE POSTED DATA */
$sAuctionType = $_POST['auction-type'];
$sAbodeType = $_POST['abode-type'];
$sPostalCode = $_POST['postal-code'];
$sAddress = $_POST['address'];
$sCity = $_POST['city'];
$iPrice = $_POST['price'];
$iSize = $_POST['size'];
$iTotalRooms = $_POST['total-rooms'];
$files = $_FILES;

/* RETRIEVE THE USER ID FROM THE API-FUNCTIONS */
$iUserId = fnGetUserId();

/* SETUP READABLE NUMBER */
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

/* CREATE A STRING THAT LOOKS LIKE JSON */
$sProperty = '{}';

/* DECODE THE STRING CREATED */
$jProperty = json_decode($sProperty);
$iId = count($ajProperties) + 8325;
/* BIND THE VALUES TO THE JSON */
$jProperty->id = $iId;
$jProperty->auctionType = $sAuctionType;
$jProperty->abodeType = $sAbodeType;
$jProperty->postalCode = $sPostalCode;
$jProperty->address = $sAddress;
$jProperty->city = $sCity;
$jProperty->price = $iPrice;
$jProperty->size = $iSize;
$jProperty->totalRooms = $iTotalRooms;
$jProperty->ownerId = $iUserId;

//$jProperty->images->1= $iUserId;

/* upload the properties images */
$ajFiles = fnUploadImage($files, $iId);
/* count the total amount of files uploaded */
$ajFilesCount = count($ajFiles);

/* iterate over the files */
for ($i = 0;
$i < $ajFilesCount;
$i++) {
/* get the file name */
$sImage = $ajFiles[$i]->image;

/* BIND THE IMAGES TO THE JSON */
$jProperty->images->$i = $sImage;
}

/* PUSH THE PROPERTY BEING CREATED INTO THE ARRAY */
array_push($ajProperties, $jProperty);

/* CONVERT THE ARRAY OF JSON INTO STRING TEXT, MAKE THE TEXT READABLE AND SETUP UNICODE RECOGNITION */
$sajProperties = json_encode($ajProperties, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

/* PUSH THE DATA TO THE FILE */
file_put_contents($sFileName, $sajProperties);

echo '{"status":"ok"}';
?>