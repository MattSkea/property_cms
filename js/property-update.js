/****************************************************/
/********************INITIALIZE**********************/
/****************************************************/
/*SETUP EDITING INITIALIZATION*/
$(document).on("click", ".btn-property-edit", function () {

    /*retrieve the id of the element being edited*/
    var sId = $(this).siblings(".lbl-property-id").text();
    var sAuction = $(this).siblings(".lbl-property-auction").text();
    var sAdobe = $(this).siblings(".lbl-property-abode").text();
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
        "sAdobeType": sAdobe,
        "sPostalCode": sPostalCode,
        "sAddress": sAddress,
        "sCity": sCity,
        "iPrice": iPrice,
        "iSize": iSize,
        "iTotalRooms": iTotalRooms
    };

    /*initialize the function to update the create form the the jDataToEdit */
    fnPropertyEditUpdateCreateForm(jPropertyToEdit);

    /*initialize go to edit property page function*/
    fnGoToPropertyEdit();

    /*stop getting properties -page change*/
    // fnClearPropertyGetInterval();
    fnStopUpdatingProperties();


    $(".notification-error").remove();
    $("#form-property-create").find(".input-error").removeClass();
});

/****************************************************/
/*******************FUNCTIONS************************/
/****************************************************/
/*SETUP AJAX POST FUNCTION TO POST UPDATE - THE FUNCTION IS INITIALIZED IN THE fnCheckIfPropertyEditing()*/
function fnEditProperty() {

    /*setup ajax post*/
    $.ajax({
        "type": "POST",
        "url": "./services/api-property-update.php",
        "data": $("#form-property-create").serialize(),
        "cache": false,
        "processData": false,
        success: function (jData) {

            fnGetProperties();

        },
        error: function (jData) {
            console.log("error - trying to update a property");

        }
    });
}
/****************************************************/
/*UPDATE THE PROPERTY-CREATE FORM WITH UPDATE INFO*/
function fnPropertyEditUpdateCreateForm(jPropertyToEdit) {
    /*update image*/
    $("#article-create-properties-image").css({"display": "none"});
    $("#article-update-properties-image").css({"display": "flex"});
    $("#property-create-image-container").css({"display": "none"});
    /*update headings*/
    /*use child selector to avoid overwriting heading elemnts css*/
    $(".section-heading-property-create").children().text("EDIT PROPERTY");
    $("#form-property-create-heading").text("Edit your property below");

    /*update inputs*/
    $("#txt-create-property-id").val(jPropertyToEdit.sId);
    $("#txt-create-property-auction-type").val(jPropertyToEdit.sAuctionType);
    $("#txt-create-property-abode-type").val(jPropertyToEdit.sAdobeType);
    $("#txt-create-property-postal-code").val(jPropertyToEdit.sPostalCode);
    $("#txt-create-property-address").val(jPropertyToEdit.sAddress);
    $("#txt-create-property-city").val(jPropertyToEdit.sCity);
    $("#txt-create-property-price").val(jPropertyToEdit.iPrice);
    $("#txt-create-property-size").val(jPropertyToEdit.iSize);
    $("#txt-create-property-total-rooms").val(jPropertyToEdit.iTotalRooms);

    /*update button*/
    $("#txt-btn-save-property").text("Edit property");

}
/****************************************************/
/*GO TO THE CREATE PROPERTY PAGE*/
function fnGoToPropertyEdit() {
    $(".section").hide();
    $("#section-property-create").css({"display": "flex"});
}

