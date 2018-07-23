<?php

require_once "api-functions.php";
//ob_start();
/* * ********************************************** */
/* * ***********GET PROPERTY SERVICE*************** */
/* * ********************************************** */
/* SETUP A STRING FOR THE PROPERTY FILE */
$sFileName = '../data-properties.txt';

/* EXTRACT THE STRING CONTENT OF THE FILE */
$sajProperties = file_get_contents($sFileName);
/* DECODE THE STRING CONTENT THE WAS RETRIEVED FROM THE FILE */
$ajProperties = json_decode($sajProperties);

/* * ********************************************** */
/* CHECK IF THE FILE HAS AN ARRAY */
if (!is_array($ajProperties)) {
    /* PRINT OUT ERROR MESSAGE */
    echo '{"status":"error", "id":"001", "message":"could not work with the database"}';
    /* EXIT PHP */
    exit;
}

/* * ********************************************** */
/* ON SUCCESS */
/* CREATE A STRING THAT LOOKS LIKE JSON */
$sProperty = '{}';

/* DECODE THE STRING CREATED */
$jProperty = json_decode($sProperty);


/* CREATE AN ARRAY TO STORE THE PROPERTY ROWS */
$ajPropertiesRows = [];

/* CREATE A PLACE HOLDER FOR THE ARRAY COUNT */
$iPropertyCount = count($ajProperties); /* NB: getting an additional null value for some reasons */
/* LOOP OVER THE PROPERTIES ARRAY */
for ($i = 0; $i < $iPropertyCount; $i++) {

    /* CREATE PLACEHOLDERS AND BIND ALL THE VALUES FROM THE PROPERTIES ARRAY */
    $sId = $ajProperties[$i]->id;
    $sAuctionType = $ajProperties[$i]->auctionType;
    $sAbodeType = $ajProperties[$i]->abodeType;
    $sPostalCode = $ajProperties[$i]->postalCode;
    $sAddress = $ajProperties[$i]->address;
    $sCity= $ajProperties[$i]->city;
    $iPrice = $ajProperties[$i]->price;
    $iSize = $ajProperties[$i]->size;
    $iTotalRooms = $ajProperties[$i]->totalRooms;
    $iOwnerId = $ajProperties[$i]->ownerId;

    if ((fnHasAccess(1) && fnOwnsThisProperty($iOwnerId) || fnHasAccess(2))) {
        $sBlueprint = '
			<div class="aside-property-content property-row">
			<div class="lbl-property-id">{{id}}</div>
			<div class=" lbl-property-auction">{{auction-type}}</div>
			<div class="lbl-property-abode">{{abode-type}}</div>
			<div class="lbl-property-postal-code">{{postal-code}}</div>
			<div class="lbl-property-city">{{city}}</div>
			<div class="lbl-property-address">{{address}}</div>
			<div class="lbl-property-price">{{price}}</div>
			<div class="lbl-property-size">{{size}}</div>
			<div class="lbl-property-total-rooms">{{number-of-rooms}}</div>
			<div class="property-icons btn-property-view fa fa-eye fa-fw" data-go-to="section-property-view"></div>
			<div class="property-icons btn-property-edit fa fa-edit fa-fw" data-go-to="section-property-create"></div>
			<div class="property-icons btn-property-delete fa fa-trash fa-fw"></div>
			</div>';
    } else if (fnOwnsAnyProperties() && fnHasAccess(1)) {/* CHECK IF THE LOGGED USER HAS ANY SAVED PROPERTIES */
        $sBlueprint = '
			<div class="aside-property-content property-row">
			<div class="lbl-property-id">{{id}}</div>
			<div class=" lbl-property-auction">{{auction-type}}</div>
			<div class="lbl-property-abode">{{abode-type}}</div>
			<div class="lbl-property-postal-code">{{postal-code}}</div>
			<div class="lbl-property-city">{{city}}</div>
			<div class="lbl-property-address">{{address}}</div>
			<div class="lbl-property-price">{{price}}</div>
			<div class="lbl-property-size">{{size}}</div>
			<div class="lbl-property-total-rooms">{{number-of-rooms}}</div>
			<div class="property-icons btn-property-view fa fa-eye fa-fw" data-go-to="section-property-view"></div>
			<div class="property-icons"></div>
			<div class="property-icons"></div>
			</div>';
    } else if (!fnActiveUserSession() || fnHasAccess(1)) { /* CHECK IF THE USER HAS ACCESS TO EDIT OR DELETE PROPERTIES */
        $sBlueprint = '
			<div class="aside-property-content property-row">
			<div class="lbl-property-id">{{id}}</div>
			<div class=" lbl-property-auction">{{auction-type}}</div>
			<div class="lbl-property-abode">{{abode-type}}</div>
			<div class="lbl-property-postal-code">{{postal-code}}</div>
			<div class="lbl-property-city">{{city}}</div>
			<div class="lbl-property-address">{{address}}</div>
			<div class="lbl-property-price">{{price}}</div>
			<div class="lbl-property-size">{{size}}</div>
			<div class="lbl-property-total-rooms">{{number-of-rooms}}</div>
			<div class="property-icons btn-property-view fa fa-eye fa-fw" data-go-to="section-property-view"></div>
                        </div>';
    }
    /* CREATE A STRING THAT LOOKS LIKE JSON THAT WILL HOLD EACH PROPERTY */
    $sPropertyRows = '{}'; /* NB: CREATE NEW JSON FOR EVERY TEMPLATE */
    /* DECODE THE STRING CREATED */
    $jPropertyRow = json_decode($sPropertyRows);

    /* setup a temporary blueprint */
    $sTempBlueprint = htmlspecialchars($sBlueprint);
    /* replace all the place holders with the items pulled from the array */
    $sTempBlueprint = str_replace("{{id}}", $sId, $sTempBlueprint);
    $sTempBlueprint = str_replace("{{auction-type}}", $sAuctionType, $sTempBlueprint);
    $sTempBlueprint = str_replace("{{abode-type}}", $sAbodeType, $sTempBlueprint);
    $sTempBlueprint = str_replace("{{postal-code}}", $sPostalCode, $sTempBlueprint);
    $sTempBlueprint = str_replace("{{city}}", $sCity, $sTempBlueprint);
    $sTempBlueprint = str_replace("{{address}}", $sAddress, $sTempBlueprint);
    $sTempBlueprint = str_replace("{{price}}", $iPrice, $sTempBlueprint);
    $sTempBlueprint = str_replace("{{size}}", $iSize, $sTempBlueprint);
    $sTempBlueprint = str_replace("{{number-of-rooms}}", $iTotalRooms, $sTempBlueprint);

    $jPropertyRow->propertyRow = $sTempBlueprint;



    array_push($ajPropertiesRows, $jPropertyRow);
}
/* convert the json to string */
$sPropertyRows = json_encode($ajPropertiesRows);

echo $sPropertyRows;
?>