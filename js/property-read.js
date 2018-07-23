/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*ADD||EDIT PROPERTY*/
$(document).on("click", ".btn-property-view", function () {
    /*create variables and store the data values from the row selected*/
    var sId = $(this).siblings(".lbl-property-id").text();
    var sAuction = $(this).siblings(".lbl-property-auction").text();
    var sAbode = $(this).siblings(".lbl-property-abode").text();
    var sPostalCode = $(this).siblings(".lbl-property-postal-code").text();
    var sAddress = $(this).siblings(".lbl-property-address").text();
    var sCity = $(this).siblings(".lbl-property-city").text();
    var iPrice = $(this).siblings(".lbl-property-price").text();
    var iSize = $(this).siblings(".lbl-property-size").text();
    var iTotalRooms = $(this).siblings(".lbl-property-total-rooms").text();

    /*setup a json object to hold the items to edit*/
    var jPropertyToEdit = {
        "sId": sId,
        "sAuctionType": sAuction,
        "sAbodeType": sAbode,
        "sPostalCode": sPostalCode,
        "sAddress": sAddress,
        "sCity": sCity,
        "iPrice": iPrice,
        "iSize": iSize,
        "iTotalRooms": iTotalRooms
    };

    /*retrieve the attribute on the link that was clicked*/
    var sIdWindowToShow = $(this).attr("data-go-to");

    /*navigate to properties table window*/
    fnNavigateToSection(sIdWindowToShow);

    /*update the view property page*/
    fnUpdatePropertyViewSection(jPropertyToEdit);

    /*initialize google maps for the property*/
    fnInitializePropertyMap(sAddress);
});

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*UPDATE PROPERTY VIEW WINDOW*/
function fnUpdatePropertyViewSection(jPropertyToEdit) {

    var sPropertyBlueprint = '\
          <div> \
          <div id="aside-property-location" class="property-details-content">\
                    <div id="property-address">{{address}}</div>\
                    <div id="property-zipcity">{{postalCode}}, {{city}}</div>\
                </div>\
                <div id="property-info" class="property-details-content">\
                    <div id="abode">\
                        <div>Type</div><div>{{abodeType}}</div>\
                    </div>\
                    <div id="auction">\
                        <div>Auction type</div><div>{{auctionType}}</div>\
                    </div>\
                    <div id="size">\
                        <div>Size</div><div>{{size}}m<sup>2</sup></div>\
                    </div>\
                    <div id="rooms">\
                        <div>Total rooms</div><div>{{rooms}}</div>\
                    </div>\
                    <div id="price">\
                        <div>Price</div><div>{{price}} DKK</div></div>\
                   </div>\
            </div>\
    ';

    /*get the information from each item*/
    var sPropertyId = jPropertyToEdit.sId;
    var sPropertyAuctionType = jPropertyToEdit.sAuctionType;
    var sPropertyAuctionPostalCode = jPropertyToEdit.sPostalCode;
    var sPropertyAbodeType = jPropertyToEdit.sAbodeType;
    var sPropertyAddress = jPropertyToEdit.sAddress;
    var sPropertyCity = jPropertyToEdit.sCity;
    var iPropertyPrice = jPropertyToEdit.iPrice;
    var iPropertySize = jPropertyToEdit.iSize;
    var iPropertyTotalRooms = jPropertyToEdit.iTotalRooms;

    $("#propertyMapAddress").val(sPropertyAddress);

    var sPropertyTemplate = sPropertyBlueprint;
    /*replace the placeholders in the template with the data recieved from the server*/
    sPropertyTemplate = sPropertyTemplate.replace("{{id}}", sPropertyId);
    sPropertyTemplate = sPropertyTemplate.replace("{{auctionType}}", sPropertyAuctionType);
    sPropertyTemplate = sPropertyTemplate.replace("{{abodeType}}", sPropertyAbodeType);
    sPropertyTemplate = sPropertyTemplate.replace("{{postalCode}}", sPropertyAuctionPostalCode);
    sPropertyTemplate = sPropertyTemplate.replace("{{address}}", sPropertyAddress);
    sPropertyTemplate = sPropertyTemplate.replace("{{city}}", sPropertyCity);
    sPropertyTemplate = sPropertyTemplate.replace("{{price}}", iPropertyPrice);
    sPropertyTemplate = sPropertyTemplate.replace("{{size}}", iPropertySize);
    sPropertyTemplate = sPropertyTemplate.replace("{{rooms}}", iPropertyTotalRooms);

    /*empty all the rows below the navigation in the table*/
    $("#aside-property-location").parent().empty();
    /*append the new row to the cleared table*/
    $("#property-details").prepend(sPropertyTemplate);
}