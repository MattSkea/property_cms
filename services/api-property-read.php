<?php
/***GET PROPERTY IMAGES AND SED THEM TO THE CLIENT***/
/* CREATE PLACEHOLDERS AND POPULATE THEM WITH THE POSTED DATA */
$sId = $_GET['id'];

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
    if ($id = $ajProperties[$i]->id) {
        /* CREATE PLACEHOLDERS AND BIND ALL THE VALUES FROM THE PROPERTIES ARRAY */
        $sId = $ajProperties[$i]->id;
        $sAuctionType = $ajProperties[$i]->auctionType;
        $sAbodeType = $ajProperties[$i]->abodeType;
        $sPostalCode = $ajProperties[$i]->postalCode;
        $sAddress = $ajProperties[$i]->address;
        $iPrice = $ajProperties[$i]->price;
        $iSize = $ajProperties[$i]->size;
        $iTotalRooms = $ajProperties[$i]->totalRooms;
        $iOwnerId = $ajProperties[$i]->ownerId;

        /* CREATE A BLUEPRINT FOR THE PROPERTY DETAILS */
        $propertyDetailsBlueprint = '<div>
    <div id="aside-property-location" class="property-details-content">
        <div id="property-address">{{address}}</div>
        <div id="property-zipcity">{{postalCode}}, {{city}}</div>
    </div>
    <div id="property-info" class="property-details-content">
        <div id="abode">
            <div>Type</div><div>{{abodeType}}</div>
        </div>
        <div id="auction">
            <div>Auction type</div><div>{{auctionType}}</div>
        </div>
        <div id="size">
            <div>Size</div><div>{{size}}m<sup>2</sup></div>
        </div>
        <div id="price">
            <div>Price</div><div>{{price}} DKK</div></div>
    </div>
</div>';
        /* CREATE A STRING THAT LOOKS LIKE JSON THAT WILL HOLD EACH PROPERTY */
        $sPropertyRows = '{}'; /* NB: CREATE NEW JSON FOR EVERY TEMPLATE */
        /* DECODE THE STRING CREATED */
        $jPropertyRow = json_decode($sPropertyRows);

        /* setup a temporary blueprint */
        $sTempBlueprint = htmlspecialchars($propertyDetailsBlueprint);
        /* replace all the place holders with the items pulled from the array */
        $sTempBlueprint = str_replace("{{id}}", $sId, $sTempBlueprint);
        $sTempBlueprint = str_replace("{{auctionType}}", $sAuctionType, $sTempBlueprint);
        $sTempBlueprint = str_replace("{{abodeType}}", $sAbodeType, $sTempBlueprint);
        $sTempBlueprint = str_replace("{{postalCode}}", $sPostalCode, $sTempBlueprint);
        $sTempBlueprint = str_replace("{{address}}", $sAddress, $sTempBlueprint);
        $sTempBlueprint = str_replace("{{price}}", $iPrice, $sTempBlueprint);
        $sTempBlueprint = str_replace("{{size}}", $iSize, $sTempBlueprint);
        $sTempBlueprint = str_replace("{{number-of-rooms}}", $iTotalRooms, $sTempBlueprint);

        $jPropertyRow->propertyRow = $sTempBlueprint;



        array_push($ajPropertiesRows, $jPropertyRow);
        
		break;
    }
}
/* convert the json to string */
$sPropertyRows = json_encode($ajPropertiesRows);

echo $sPropertyRows;
