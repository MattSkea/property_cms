/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*Initialize google maps*/
function fnInitializePropertyMap() {
    fnPropertyMap();
}

$(document).on("click", "propertyMapSubmit", function () {
    fnPropertyMap();
});
/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*INITIALIZE GOOGLE MAPS FOR propertyMap*/
function fnPropertyMap() {
    /*setup google map*/
    var map = new google.maps.Map(document.getElementById('propertyMap'), {
        zoom: 15
    });
    /*setup google geocoder -map marker*/
    var geocoder = new google.maps.Geocoder();
    /*first off the geocode map marker*/
    geocodeAddress(geocoder, map);
}

/****************************************************/
/*GO TO GOOGLE MAP GEO LOCATION*/
function geocodeAddress(geocoder, resultsMap) {
    /*get the property address*/
    var address = document.getElementById('propertyMapAddress').value;
    /*mark the address in google maps*/
    geocoder.geocode({'address': address}, function (results, status) {
        /*IF THE STATUS IS OK*/
        if (status === 'OK') {
            /*SET PLACE MARKER*/
            resultsMap.setCenter(results[0].geometry.location);
            /*STORE MARKER LOCATION RESULTS*/
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
                address: results[0].formatted_address
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
